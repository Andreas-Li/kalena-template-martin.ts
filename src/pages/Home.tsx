import { createRoute } from "@kalena/framework";
import { isPublic } from "@permissions/public.ts";
import { BaseLayout } from "@comp/layout/BaseLayout.tsx";
import { SpotifyPlayer } from "@comp/content/SpotifyPlayer.tsx";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <SpotifyPlayer></SpotifyPlayer>
    </BaseLayout>
  );
};

export const homeRoute = createRoute({
  path: "/",
  component: Home,
  permission: {
    check: isPublic,
    redirectPath: "/",
  },
  partial: false,
  hmr: true,
});
