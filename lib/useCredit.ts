export function useCredits() {
  const consumeCredits = async (uid: string, service: string) => {
    const res = await fetch("/api/credits/use", {
      method: "POST",
      body: JSON.stringify({ uid, service }),
    });

    return res.json();
  };

  return { consumeCredits };
}
