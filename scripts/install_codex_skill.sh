#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
SKILL_NAME="$(basename "${SKILL_ROOT}")"
CODEX_HOME_DIR="${CODEX_HOME:-${HOME}/.codex}"
DEST_DIR="${CODEX_HOME_DIR}/skills/${SKILL_NAME}"
MODE="copy"

usage() {
  cat <<EOF
Install this skill into Codex.

Usage:
  ./scripts/install_codex_skill.sh [--copy|--link] [--dest PATH]

Options:
  --copy       Copy the skill into the Codex skills directory (default)
  --link       Symlink the repo into the Codex skills directory
  --dest PATH  Override the install destination
  -h, --help   Show this help message
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --copy)
      MODE="copy"
      shift
      ;;
    --link)
      MODE="link"
      shift
      ;;
    --dest)
      DEST_DIR="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

mkdir -p "$(dirname "${DEST_DIR}")"
rm -rf "${DEST_DIR}"

if [[ "${MODE}" == "link" ]]; then
  ln -s "${SKILL_ROOT}" "${DEST_DIR}"
  echo "Linked ${SKILL_NAME} to ${DEST_DIR}"
  exit 0
fi

mkdir -p "${DEST_DIR}"

COPY_ITEMS=(
  "SKILL.md"
  "README.md"
  "LICENSE"
  "agents"
  "assets"
  "references"
  "scripts"
)

for item in "${COPY_ITEMS[@]}"; do
  cp -R "${SKILL_ROOT}/${item}" "${DEST_DIR}/${item}"
done

echo "Copied ${SKILL_NAME} to ${DEST_DIR}"
