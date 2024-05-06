import { TinyMCE } from "tinymce";

import Plugin from "../../main/ts/Plugin";

declare let tinymce: TinyMCE;

Plugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "code tinymce-placeholder",
  toolbar: "tinymce-placeholder",
  content_style:
    "span.mce-placeholder{font-size: 14px;user-select:none;} span.mce-placeholder input{display: none;} span.mce-placeholder .mark{padding: 4px 6px; background-color: dimgray; color: #fff;} span.mce-placeholder .txt{padding: 4px 6px; background-color: #eaeaea; color: dimgray;}",
});
