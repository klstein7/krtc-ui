# Kyle's React Tailwind Components

Hey I'm Kyle and I love Tailwind and React. This repo contains a collection of components I made and use in some of my projects.

# Storybook

https://klstein7.github.io/krtc-ui/

# Installation

First, install and setup TailwindCSS in your React project.

Then install this package:

```
yarn add krtc-ui
```

In your tailwind.config.cjs, add this package into content:

```
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/krtc-ui/**/*.{js,ts,jsx,tsx}",
],
```

Usage with Next.js (13.1+), add transpilePackages to your next.config.mjs

```
transpilePackages: ["krtc-ui"]
```

Good to go!

```
import { Button } from "krtc-ui";

<Button>Click me</Button>
```

# Modals

This library uses @ebay/nice-modal-react to manage modals

```
yarn add @ebay/nice-modal-react
```

Wrap your app in <NiceModal.Provider> (e.g. \_app.tsx in Next.js)

```
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return (
      <NiceModal.Provider>
        <Component {...pageProps} />
      </NiceModal.Provider>
  );
};
```

Opening a modal:

```
import type { ModalProps } from "krtc-ui";
import { Button, Modal } from "krtc-ui";

<Button onClick={() => {
  NiceModal.show(Modal, {
    title: "Modal title",
    description: "Modal subtitle",
    children: <div>Modal content</div>
  } as ModalProps)
}}>Open</Button>
```
