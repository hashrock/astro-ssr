export async function get({ params }) {
  const dataStr = new Date().toISOString();

  return new Response(JSON.stringify({
    message: "Hello from Astro!",
    now: dataStr
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}