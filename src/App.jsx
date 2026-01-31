import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
// connect
import Membership from "./pages/Membership";
import FirstTimer from "./pages/FirstTimer";
import PrayerRequest from "./pages/PrayerRequest";
// media
import WatchLive from "./pages/WatchLive";
import Article from "./pages/Article";
import Sermon from "./pages/Sermon";
// resources
import Devotionals from "./pages/Devotionals";
import Confessions from "./pages/Confessions";
import Books from "./pages/Books";
import Discipleship from "./pages/Discipleship";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        // connect
        {
          path: "connect/membership",
          element: <Membership />,
        },
        {
          path: "connect/first-timer",
          element: <FirstTimer />,
        },
        {
          path: "connect/prayer-request",
          element: <PrayerRequest />,
        },
        // media
        {
          path: "media/sermons",
          element: <Sermon />,
        },
        {
          path: "media/watch-live",
          element: <WatchLive />,
        },
        {
          path: "media/article",
          element: <Article />,
        },
        // resources
        {
          path: "resources/devotionals",
          element: <Devotionals />,
        },
        {
          path: "resources/confessions",
          element: <Confessions />,
        },
        {
          path: "resources/books",
          element: <Books />,
        },
        {
          path: "resources/discipleship",
          element: <Discipleship />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "give",
          element: <Give />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
