import React, { useEffect } from "react"

export const usePageview = () => {
  useEffect(() => {
    gtag('event', 'page_view', {
      page_title: window.document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_to: 'UA-124323639-1'
    })
  }, []);
};
