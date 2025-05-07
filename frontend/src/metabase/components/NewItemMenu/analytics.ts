import { trackSimpleEvent } from "metabase/lib/analytics";

type SubItem = "question" | "native_query" | "dashboard" | "metabot";

export const trackNewMenuItemClicked = (item: SubItem) =>
  trackSimpleEvent({
    event: "new_button_item_clicked",
    triggered_from: item,
  });
