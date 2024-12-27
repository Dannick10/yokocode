import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-merbivore";
import { useState } from "react";

const useTheme = () => {
    const themes = [
        "monokai",
        "github",
        "tomorrow",
        "kuroir",
        "twilight",
        "xcode",
        "textmate",
        "solarized_dark",
        "solarized_light",
        "terminal",
        "chaos",
        "clouds_midnight",
        "cobalt",
        "dawn",
        "dracula",
        "dreamweaver",
        "eclipse",
        "idle_fingers",
        "iplastic",
        "katzenmilch",
        "kr_theme",
        "merbivore",
        "merbivore_soft",
        "mono_industrial",
        "pastel_on_dark",
        "sqlserver",
      ]

      const [theme] = useState(themes[4]);

      return { theme };
}

export default useTheme;