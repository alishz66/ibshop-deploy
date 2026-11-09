#!/usr/bin/env bash
set -euo pipefail

echo "================================================================"
echo "  iBshop Enterprise Platform — Linux Docker Deployment Runner"
echo "================================================================"

LATEST_REPO_VERSION=$(grep '^IBSHOP_VERSION=' .env.example | cut -d'=' -f2 | tr -d '\r\n')

if [ ! -f .env ]; then
  echo "[1/4] Creating .env from .env.example..."
  cp .env.example .env
else
  # Auto-upgrade IBSHOP_VERSION in existing .env while preserving custom server settings
  TARGET_SYNC_VER="${1:-${LATEST_REPO_VERSION}}"
  sed -i "s/^IBSHOP_VERSION=.*/IBSHOP_VERSION=${TARGET_SYNC_VER}/" .env
fi

set -a
source .env
set +a

TARGET_VERSION="${1:-${IBSHOP_VERSION}}"
echo "[2/4] Target Release Version: ${TARGET_VERSION}"

OFFLINE_ARCHIVE="ibshop-images-${TARGET_VERSION}.tar.gz"
if [ -f "${OFFLINE_ARCHIVE}" ]; then
  echo "[3/4] Found offline image archive (${OFFLINE_ARCHIVE}). Loading into Docker..."
  docker load -i "${OFFLINE_ARCHIVE}"
else
  echo "[3/4] Pulling public images for ${TARGET_VERSION}..."
  docker compose pull
fi

echo "[4/4] Starting / Updating iBshop containers..."
docker compose up -d --remove-orphans

echo ""
echo "================================================================"
echo "  Deployment Complete! Active Services:"
echo "  - Public Web Portal (SSR):  http://<SERVER_IP>:${PORTAL_HTTP_PORT:-8080}"
echo "  - CMS Admin Panel (SPA):    http://<SERVER_IP>:${ADMIN_HTTP_PORT:-8081}"
echo "  - Swagger API Docs:         http://<SERVER_IP>:${PORTAL_HTTP_PORT:-8080}/swagger"
echo "  - Live Version Check:       http://<SERVER_IP>:${PORTAL_HTTP_PORT:-8080}/api/system/version"
echo "================================================================"
