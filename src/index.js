import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const localLang = navigator.language;

let lang;
if (localLang==="en") {
   lang = localeEnMessages;
} else {
   lang = localeEsMessages;
}

ReactDOM.render(
	<IntlProvider locale={localLang} messages={lang}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);