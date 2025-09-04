
import React from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PageViewTracker: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const insertPageView = async () => {
      try {
        const payload = {
          path: location.pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent || null,
          session_id: (globalThis as any).__pv_session_id || crypto.randomUUID(),
        };

        // Cache session id for this tab/session
        (globalThis as any).__pv_session_id = payload.session_id;

        console.log("[analytics] inserting page_view", payload);
        const { error } = await supabase.from("page_views").insert(payload);
        if (error) {
          console.error("[analytics] page_view insert error:", error);
        }
      } catch (err) {
        console.error("[analytics] unexpected error inserting page_view:", err);
      }
    };

    insertPageView();
  }, [location.pathname]);

  return null;
};

export default PageViewTracker;
