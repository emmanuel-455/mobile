import { useSSO } from "@clerk/clerk-expo";
import { useState, useCallback } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = useCallback(
    async (strategy: "oauth_google" | "oauth_apple") => {
      if (isLoading) return; // prevent double calls
      setIsLoading(true);

      try {
        const { createdSessionId, setActive } = await startSSOFlow({ strategy });

        if (createdSessionId && setActive) {
          // only call once, not in a loop
          await setActive({ session: createdSessionId });
        }
      } catch (err) {
        console.log("Error in social auth", err);
        const provider = strategy === "oauth_google" ? "Google" : "Apple";
        Alert.alert("Error", `Failed to sign in with ${provider}. Please try again.`);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, startSSOFlow] // memoized so it won't recreate every render
  );

  return { isLoading, handleSocialAuth };
};
