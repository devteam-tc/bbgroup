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
    NEXT_PUBLIC_NGROK_URL: "0b6fe4374277.ngrok-free.app",
  },
};

module.exports = nextConfig;
