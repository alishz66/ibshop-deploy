#!/usr/bin/env bash
set -euo pipefail

# =============================================================================
# iBshop Enterprise Platform — Automated Linux Deployment & Upgrade Script
# Supports BOTH Offline (.tar.gz bundle) and Online (ghcr.io) deployments
# =============================================================================

echo "================================================================"
echo "  iBshop Enterprise Platform — Linux Docker Deployment Runner"
echo "================================================================"

if [ ! -f .env ]; then
  echo "[1/4] Creating .env from .env.example..."
  cp .env.example .env
fi

# Load environment variables
set -a
source .env
set +a

TARGET_VERSION="${1:-${IBSHOP_VERSION:-v0.1.1-20261109.2}}"
echo "[2/4] Target Release Version: ${TARGET_VERSION}"

# Update IBSHOP_VERSION in .env if passed as CLI argument
if [ -n "${1:-}" ]; then
  sed -i "s/^IBSHOP_VERSION=.*/IBSHOP_VERSION=${TARGET_VERSION}/" .env
fi

# Check if an offline tar.gz bundle exists in current directory
OFFLINE_ARCHIVE="ibshop-images-${TARGET_VERSION}.tar.gz"
if [ -f "${OFFLINE_ARCHIVE}" ]; then
  echo "[3/4] Found offline image archive (${OFFLINE_ARCHIVE}). Loading into Docker..."
  docker load -i "${OFFLINE_ARCHIVE}"
else
  echo "[3/4] No local ${OFFLINE_ARCHIVE} found. Pulling images from registry..."
  docker compose pull || echo "Warning: Pull skipped or offline mode; using locally cached images."
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
