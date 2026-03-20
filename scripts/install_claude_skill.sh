#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SOURCE_DIR="$(cd "${SCRIPT_DIR}/../.claude/skills/tailor-resume-for-role" && pwd)"
CLAUDE_HOME_DIR="${CLAUDE_HOME:-${HOME}/.claude}"
DEST_DIR="${CLAUDE_HOME_DIR}/skills/tailor-resume-for-role"
MODE="copy"

usage() {
  cat <<EOF
Install this skill into Claude Code.

Usage:
  ./scripts/install_claude_skill.sh [--copy|--link] [--dest PATH]

Options:
  --copy       Copy the skill into the Claude Code skills directory (default)
  --link       Symlink the repo skill into the Claude Code skills directory
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
  ln -s "${SKILL_SOURCE_DIR}" "${DEST_DIR}"
  echo "Linked tailor-resume-for-role to ${DEST_DIR}"
  exit 0
fi

mkdir -p "${DEST_DIR}"
cp -R "${SKILL_SOURCE_DIR}/." "${DEST_DIR}/"

echo "Copied tailor-resume-for-role to ${DEST_DIR}"
