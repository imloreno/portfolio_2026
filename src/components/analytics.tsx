/**
 * Cloudflare Web Analytics — privacy-first and cookieless, so no consent banner
 * is required. Renders nothing unless a beacon token is provided at build time.
 *
 * Get the token: Cloudflare dashboard → Web Analytics → add site → copy token.
 */
const beaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export function Analytics() {
  if (!beaconToken) return null;

  return (
    <script
      data-cf-beacon={JSON.stringify({ token: beaconToken })}
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
    />
  );
}
