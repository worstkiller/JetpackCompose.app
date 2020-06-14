import JetpackComposeMetadata from "../models/JetpackComposeMetadata";

const classicAndroidVsJetpackComposeMap = new Map([
    [
      "AppBar",
      new JetpackComposeMetadata("TopAppBar", "http://www.google.com", ""),
    ],
    ["Button", new JetpackComposeMetadata("Button", "", "")],
    ["CardView", new JetpackComposeMetadata("Card", "", "")],
    ["ConstraintLayout", new JetpackComposeMetadata("Constraint Layout", "", "")],
    ["EditText", new JetpackComposeMetadata("TextField", "", "")],
    ["FrameLayout", new JetpackComposeMetadata("Stack", "", "")],
    ["EditText", new JetpackComposeMetadata("TextField", "", "")],
    ["LinearLayout", new JetpackComposeMetadata("Row/Column", "", "")],
    ["ProgressBar", new JetpackComposeMetadata("ProgressIndicator", "", "")],
    ["RecyclerView", new JetpackComposeMetadata("AdapterList", "", "")],
    ["Slider", new JetpackComposeMetadata("Slider", "", "")],
    [
      "ScrollView",
      new JetpackComposeMetadata("Vertical/Horizontal Scroller", "", ""),
    ],
    ["TextView", new JetpackComposeMetadata("Text", "", "")],
    ["Themes", new JetpackComposeMetadata("MaterialTheme", "", "")],
  ]);

export default classicAndroidVsJetpackComposeMap;