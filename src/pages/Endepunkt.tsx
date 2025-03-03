import { createRoute, v } from "@kalena/framework";
import { isPublic } from "@permissions/public.ts";
import { SpotifyPlayer } from "@comp/content/SpotifyPlayer.tsx";
import { Text } from "@comp/content/Text.tsx";

const Endepunkt = () => {
  const input = endepunktRoute.context().req.valid("form");

  if (!input.success) throw new Error("fuck off");

  if (input.output.trackId === input.output.correct) {
    return (
      <div>
        <Text id="response">Correct</Text>
        <SpotifyPlayer hx-swap-oob="true" />
      </div>
    );
  }

  return (
    <Text id="response" hx-swap-oob="true">
      Wrong answer!
    </Text>
  );
};

const formInput = v.object({
  trackId: v.string(),
  correct: v.string(),
});

export const endepunktRoute = createRoute({
  component: Endepunkt,
  path: "/endepunkt",
  permission: {
    check: isPublic,
    redirectPath: "/",
  },
  formValidationSchema: formInput,
  hmr: true,
  partial: true,
});
