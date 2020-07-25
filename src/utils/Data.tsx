import JetpackComposeMetadata from "../models/JetpackComposeMetadata";
import QnA from "../models/QnA";

export const classicAndroidVsJetpackComposeMap = new Map([
  [
    "AlertDialog",
    new JetpackComposeMetadata(
      "AlertDialog",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/AlertDialogActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#alertdialog"
    ),
  ],
  [
    "AppBar",
    new JetpackComposeMetadata(
      "TopAppBar",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/DrawerAppActivity.kt?q=TopAppBar#L182",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#topappbar"
    ),
  ],
  [
    "android:background",
    new JetpackComposeMetadata(
      "Surface",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/text/CustomTextActivity.kt#L187",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#Surface(androidx.ui.core.Modifier,%20androidx.ui.graphics.Shape,%20androidx.ui.graphics.Color,%20androidx.ui.graphics.Color,%20androidx.ui.foundation.Border,%20androidx.ui.unit.Dp,%20,%20)"
    ),
  ],
  [
    "android:layout_weight",
    new JetpackComposeMetadata(
      "Modifier.weight",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/layout/ViewLayoutConfigurationsActivity.kt#L78",
      "https://developer.android.com/reference/kotlin/androidx/ui/layout/ColumnScope#weight"
    ),
  ],
  [
    "BottomAppBar",
    new JetpackComposeMetadata(
      "BottomAppBar",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/BottomNavigationActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#bottomappbar"
    ),
  ],
  [
    "Button",
    new JetpackComposeMetadata(
      "Button",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/ButtonActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/Button"
    ),
  ],
  [
    "CardView",
    new JetpackComposeMetadata(
      "Card",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L114",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#card"
    ),
  ],
  [
    "Checkbox",
    new JetpackComposeMetadata(
      "Checkbox",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L157",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#checkbox"
    ),
  ],
  [
    "ConstraintLayout",
    new JetpackComposeMetadata(
      "Constraint Layout",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/layout/ConstraintLayoutActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/layout/package-summary#constraintlayout"
    ),
  ],
  [
    "Dark Mode",
    new JetpackComposeMetadata(
      "isSystemInDarkTheme()",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/theme/DarkModeActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/package-summary#issystemindarktheme"
    ),
  ],
  [
    "DrawerLayout",
    new JetpackComposeMetadata(
      "ModalDrawerLayout",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/DrawerAppActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#modaldrawerlayout"
    ),
  ],
  [
    "EditText",
    new JetpackComposeMetadata(
      "TextField",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/text/TextFieldActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#FilledTextField(kotlin.String,%20kotlin.Function1,%20,%20,%20androidx.ui.core.Modifier,%20androidx.ui.text.TextStyle,%20,%20)"
    ),
  ],
  [
    "FloatingActionButton",
    new JetpackComposeMetadata(
      "FloatingActionButton",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/FixedActionButtonActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#floatingactionbutton"
    ),
  ],
  [
    "flow.collect",
    new JetpackComposeMetadata(
      "flow.collectAsState",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/state/coroutine/CoroutineFlowActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/compose/package-summary#collectasstate"
    ),
  ],
  [
    "FrameLayout",
    new JetpackComposeMetadata(
      "Stack",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/stack/StackActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/layout/package-summary#stack"
    ),
  ],
  [
    "getDrawable",
    new JetpackComposeMetadata(
      "loadImageResource",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/image/ImageActivity.kt#L110",
      "https://developer.android.com/reference/kotlin/androidx/ui/res/package-summary#loadimageresource"
    ),
  ],
  [
    "ImageView",
    new JetpackComposeMetadata(
      "Image",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/image/ImageActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/package-summary#image"
    ),
  ],
  [
    "layer-list shadow",
    new JetpackComposeMetadata(
      "Modifier.drawShadow",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/ShadowActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/core/package-summary#drawshadow"
    ),
  ],
  [
    "LinearLayout",
    new JetpackComposeMetadata(
      "Row/Column",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/AlertDialogActivity.kt#L38",
      "https://developer.android.com/reference/kotlin/androidx/ui/layout/package-summary#column"
    ),
  ],
  [
    "liveData.observe",
    new JetpackComposeMetadata(
      "liveData.observeAsState",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/state/livedata/LiveDataActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/livedata/package-summary#(androidx.lifecycle.LiveData).observeAsState()"
    ),
  ],
  [
    "OnClickListener",
    new JetpackComposeMetadata(
      "Clickable",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/AlertDialogActivity.kt#L51",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/package-summary#clickable"
    ),
  ],
  [
    "Padding",
    new JetpackComposeMetadata(
      "Modifier.padding",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/layout/LayoutModifierActivity.kt#L51",
      "https://developer.android.com/reference/kotlin/androidx/ui/core/Modifier"
    ),
  ],
  [
    "ProgressBar",
    new JetpackComposeMetadata(
      "ProgressIndicator",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L272",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#linearprogressindicator"
    ),
  ],
  [
    "RadioGroup",
    new JetpackComposeMetadata(
      "RadioGroup",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L239",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#RadioGroup(kotlin.collections.List,%20kotlin.String,%20kotlin.Function1,%20androidx.ui.core.Modifier,%20androidx.ui.graphics.Color,%20androidx.ui.text.TextStyle)"
    ),
  ],
  [
    "RecyclerView",
    new JetpackComposeMetadata(
      "LazyColumnItems",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/scrollers/VerticalScrollableActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/lazy/package-summary#LazyColumnItems"
    ),
  ],
  [
    "SavedStateHandle",
    new JetpackComposeMetadata(
      "savedInstanceState",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/state/ProcessDeathActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/savedinstancestate/package-summary#savedinstancestate"
    ),
  ],
  [
    "ScrollView",
    new JetpackComposeMetadata(
      "Vertical/Horizontal Scroller",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/scrollers/HorizontalScrollableActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/package-summary#horizontalscroller"
    ),
  ],
  [
    "Slider",
    new JetpackComposeMetadata(
      "Slider",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L394",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#slider"
    ),
  ],
  [
    "Snackbar",
    new JetpackComposeMetadata(
      "Snackbar",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt#L367",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#Snackbar(,%20,%20,%20)"
    ),
  ],
  [
    "TextView",
    new JetpackComposeMetadata(
      "Text",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/text/CustomTextActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/foundation/package-summary#text"
    ),
  ],
  [
    "Theme.MaterialComponents",
    new JetpackComposeMetadata(
      "MaterialTheme",
      "https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/theme/DarkModeActivity.kt",
      "https://developer.android.com/reference/kotlin/androidx/ui/material/package-summary#materialtheme"
    ),
  ],
]);


export const mockQnA: Array<QnA>  = [
  new QnA(
    "What's the current status of Jetpack Compose?", 
    "Jetpack Compose is currently in Developer Preview. The API surface is still evolving but there are many people who are experimenting with it and providing feedback. If you'd like to play in role in shaping Jetpack Compose, I would encourage you to join the #compose channel in the <a target='_blank' href='http://slack.kotlinlang.org/'>Kotlin Lang Slack Channel</a>. If you'd like to learn more about Jetpack Compose, I maintain <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example'>this repo</a> that will help you get started!"
  ),
  new QnA(
    "Can I start using Jetpack Compose in production apps", 
    "The general recommendation is that if you care about the users of your app, you should wait until a more stable release of Jetpack Compose is available. If its for an internal app, side project or prototypes, you can probably start experimenting with Jetpack Compose."
  ),
  new QnA(
    "When should I expect the alpha release of Compose?", 
    "An alpha release for Compose is expected in Summer of 2020 as per the last official announcement. I am expecting it to be in August but don't quote me on it 😜"
  ),
  new QnA(
    "Will Fragments be deprecated once Compose is released?", 
    "<p>Compose didn't start with the goal replacing fragments per se but it’s a fantastic side effect. In most use cases, you shouldn’t need fragments at all if you are starting a pure compose screen/app. Moreover, since there are millions of apps that still use Fragments, there will most likely be ways to use it with that, although definitely not a requirement. </p>"
  ),
  new QnA(
    "Why was a complete rewrite of the UI toolkit necessary?", 
    "<p>Compose was built  to solve some pain points that the Android developers had been facing since many years. Let's look at what some of those were:</p>" +

    "<p><b>UI is tied to the Operating System</b><br/>The first reason is that the current UI toolkit is tied to the Android Operating System. What this means is that if we the Android team made some new improvements in the View system or as an example the View.java file, we will have to wait for an Android API release to get these improvements. It's not a simple library that I can just bump up to get these latest improvements & changes. Unbundling the view system from the OS would make it easier to quickly fix bugs and bring improvements in a backward compatible way.</p>" +
    
    "<p><b>State Management is tricky</b><br/>The way we managed UI state has always been this complicated dance that we have to do as views store own their own state. And we need to make sure that the state that we store in our view models and presenters is in sync with the state inside of the views. For example, if my business logic requires me to hide a view, that logic is stored in some view model or presenter and then as a reaction to that requirement, I need to get hold of the view I need to hide and explicitly change it's visibility by calling the setVisibility method on the view, which in turn changes the internal state of the view. Now this is really error prone and majority of the bugs in our apps stem from state management. So there has to be a better way.  </p>" +
    
    "<p><b>Lots of Context Switching</b><br/>Let's talk about the average workflow of an Android developer. We typically create views in xml, then create our screens which have lifecycles in them using Kotlin/Java. We then reference the views that we originally created in xml using id's/tags and then update its state. When we need to reference styles & dimensions, we again store them in xml. This constant context switching definitely has some impact or our productivity and we've come to accept this unfortunately. Now some folks might say that isn't it good that all the UI is in xml files and all business logic in Kotlin files. Decoupling is supposed to be good after all. Well, it's true that decoupling is a good engineering practice but this is not really decoupling because you are still referencing these xml files in your Kotlin code and making modification to it. So even though you might think that xml is decoupled and your UI code is decoupled, in reality it's just an illusion. </p>" +
    
    "<p><b>Simple things still require a lot of code</b><br/>We are used to writing a lot of code for even doing simple things. We just spoke about the normal workflow where we are making changes across so many files. Even outside of that, we have so many moving pieces that we need to take care of for writing UI code. Want to make a simple list, you create an adapter first, make sure that it extends the right class, override the relevant methods, If your list supports types of views items, then you override an additional method to pass the relevant layout xml file. So there's a lot of boilerplate code that we have to write for even doing simple things. The most effective way to reduce the number of bugs is to reduce the amount of code that we write. </p>"
  ),
  new QnA(
    "Where can I see examples to learn about Jetpack Compose?", 
    "If you haven't already noticed, here is another shameless 🔌- <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example'>Learn Jetpack Compose By Example</a>"
  ),
  new QnA(
    "How do I learn about the equivalent API for common Android tasks in Jetpack Compose?", 
    "I maintain a tool that helps you find the equivalent API's in Compose. You can use it <a target='_blank' href='https://jetpackcompose.app/'>here</a>"
  ),
  new QnA(
    "How can I get started with Compose?", 
    "You can see the <a target='_blank' href='https://developer.android.com/jetpack/compose/setup'>setup instructions here</a> to get your machine ready for doing Compose development. "
  ),
  new QnA(
    "How do I get my apps ready for Compose?", 
    "<p>If you apps are using uni-directional data flow, they will stand to benefit as the migration to Compose would be much smoother. I had spoken about a very relevant topic at Droidcon SF 2019. Towards the second half of the talk, I replace my entire UI with Compose with very little effort.</p>" +

    "<p><a target='_blank' href='[https://www.droidcon.com/media-detail?video=380844265](https://www.droidcon.com/media-detail?video=380844265)'>Video</a>  |  <a target='_blank' href='[https://speakerdeck.com/vinaygaba/architecture-agnostic-ui-development](https://speakerdeck.com/vinaygaba/architecture-agnostic-ui-development)'>Slides</a></p>"
  ),
  new QnA(
    "How would you describe a Composable?", 
    "@Composable is the secret sauce for Jetpack Compose and it is the most fundamental building block. Annotating a function with @Composable allows that function to describe UI in Compose. This annotation is needed because Compose uses a custom kotlin compiler to function. This custom compiler does some post-processing to each @Composable function and changes its definition at compile time"
  ),
  new QnA(
    "What kind of tooling is available with Compose?", 
    "<p>Android Studio lets you preview your composable functions within the IDE itself, instead of needing to download the app to an Android device or emulator. This is a fantastic feature as you can preview all your custom components(read composable functions) from the comforts of the IDE.</p>" +
    
    "<p>The main restriction is, the composable function must not take any parameters. If your composable function requires a parameter, you can simply wrap your component inside another composable function that doesn't take any parameters and call your composable function with the appropriate params. Also, don't forget to annotate it with @Preview & @Composable annotations. </p>"+
    
    "<p>In addition, you can also deploy a composable function directly to your device for quickly testing it as you are developing it.Lastly, Android Studio even lets you interact with the components right from Android Studio.</p>" +
    
    "<p><img src='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/raw/master/screenshots/compose_preview.gif' /></p>"
  ),
  new QnA(
    "How will I use view models and live data with Compose?", 
    "You can continue to use View Models and Live Data with Compose if it fits your use case. Here is an <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/state/livedata/LiveDataActivity.kt'>example</a> to help you."
  ),
  new QnA(
    "Does Compose work with WearOS?", 
    "Presently, it doesn't work with WearOS just yet but we are hopeful that it will be supported in the future."
  ),
  new QnA(
    "Is there any relation between Flutter & Compose? Which one should I use?", 
    "Flutter and Jetpack Compose are independent projects and aren't necessarily trying to compete with each other. Fluter is a framework for building cross platform native apps. Compose is a new way of writing UI code in native Android. Each have their own merits and use. Since Compose came later on, it definitely did benefit from the learnings of the Flutter team. Both of them are declarative frameworks so they do share some similarities in that regard, however the way they are implemented is different. "
  ),
  new QnA(
    "I really liked using ConstraintLayouts with the layout editor. Can I still us ConstraintLayouts in Compose?", 
    "Even though there is no layout editor in Compose, I promise you that you won't miss it! <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/layout/ConstraintLayoutActivity.kt'>Just look at this example of using ConstraintLayout in Compose</a> and be the judge yourself."
  ),
  new QnA(
    "Can I use the existing Android Views in Jetpack Compose?", 
    "Yes you can use existing Android Views and custom views in Compose. <a target='_blank' href='https://speakerdeck.com/vinaygaba/360-andev-2020-learning-jetpack-compose-by-example?slide=89'>Here is an example</a> of what the implementation looks like."
  ),
  new QnA(
    "Can I use Jetpack Compose in the existing screens of my app?", 
    "Yes, you can use Compose in existing screens. Compose has an extension function that allows you to add a @Composable function to any view group (like FrameLayout, LinearLayout, etc). <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/interop/ComposeInClassicAndroidActivity.kt'>Here is an example.</a>"
  ),
  new QnA(
    "What is the testing story for Compose?", 
    "Testing Compose screens feels a lot like unit testing due to the super simple syntax that it provides. <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/androidTest/java/com/example/jetpackcompose/text/SimpleTextComposableTest.kt'>Check out this simple example.</a>"
  ),
  new QnA(
    "Are material design widgets already available for use?", 
    "<p>A lot of widgets that adhere to the material design specification are already available in Compose. <a target='_blank' href='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/blob/master/app/src/main/java/com/example/jetpackcompose/material/MaterialActivity.kt'>Here are some implementations of the Material Design widgets.</a></p>" +
    "<p><img src='https://github.com/vinaygaba/Learn-Jetpack-Compose-By-Example/raw/master/screenshots/material_design_components.gif' /></p>"
  ),
  new QnA(
    "How does navigation work in Compose?", 
    "Navigation support hasn't been added to Compose yet. However, it is expected that it is going to be compatible with <a href=''https://developer.android.com/guide/navigation/navigation-getting-started>Navigation Component</a>."
  ),
  // new QnA(
  //   "All examples show a lot of nested composables? Isn't nesting views a bad thing?", 
  //   "TODO"
  // ),
  // new QnA(
  //   "How would styles and dimensions work in Compose?", 
  //   "TODO"
  // ),
  // new QnA(
  //   "How would you describe the lifecycle of a Composable?", 
  //   "TODO"
  // ),
  // new QnA(
  //   "How does compose handle process death?", 
  //   "TODO"
  // ),
  // new QnA(
  //   "How do animations work in Compose?", 
  //   "TODO"
  // ),
];