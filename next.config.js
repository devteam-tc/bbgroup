/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      "mixed-decls",
      "legacy-js-api",
      "import",
      "slash-div",
      "global-builtin",
    ],
  },
  env: {
    NEXT_PUBLIC_NGROK_URL: "951150aa36fd.ngrok-free.app",
  },
};

module.exports = nextConfig;
