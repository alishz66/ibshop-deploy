#!/usr/bin/env bash
set -euo pipefail

echo "================================================================"
echo "  iBshop Enterprise Platform — Smart Linux Deployment Runner"
echo "================================================================"

sync_env_key() {
  local key="$1"
  local val
  val=$(grep "^${key}=" .env.example | cut -d'=' -f2 | tr -d '\r\n')
  if [ -n "${val}" ]; then
    if grep -q "^${key}=" .env; then
      sed -i "s/^${key}=.*/${key}=${val}/" .env
    else
      echo "${key}=${val}" >> .env
    fi
  fi
}

if [ ! -f .env ]; then
  echo "[1/4] Creating .env from .env.example..."
  cp .env.example .env
else
  echo "[1/4] Syncing per-service image tags into existing .env..."
  sync_env_key "IBSHOP_VERSION"
  sync_env_key "API_VERSION"
  sync_env_key "PORTAL_VERSION"
  sync_env_key "ADMIN_VERSION"
  sync_env_key "IBSHOP_RELEASE_DATE"
fi

set -a
source .env
set +a

echo "[2/4] Active Per-Service Versions:"
echo "  - Backend API (cms-api)    : ${API_VERSION}"
echo "  - Web Portal (web-portal)  : ${PORTAL_VERSION}"
echo "  - Admin Panel (admin-panel): ${ADMIN_VERSION}"

OFFLINE_ARCHIVE="ibshop-images-${IBSHOP_VERSION}.tar.gz"
if [ -f "${OFFLINE_ARCHIVE}" ]; then
  echo "[3/4] Found offline image archive (${OFFLINE_ARCHIVE}). Loading into Docker..."
  docker load -i "${OFFLINE_ARCHIVE}"
else
  echo "[3/4] Pulling updated public images..."
  docker compose pull
fi

echo "[4/4] Updating only changed containers (zero downtime for unchanged services)..."
docker compose up -d --remove-orphans

echo ""
echo "================================================================"
echo "  Deployment Complete! Active Services:"
echo "  - Public Web Portal (SSR):  http://<SERVER_IP>:${PORTAL_HTTP_PORT:-8080}"
echo "  - CMS Admin Panel (SPA):    http://<SERVER_IP>:${ADMIN_HTTP_PORT:-8081}"
echo "  - Swagger API Docs:         http://<SERVER_IP>:${PORTAL_HTTP_PORT:-8080}/swagger"
echo "================================================================"
