declare module 'zan-utils/lib/money/formatLargeNumber' {
	 function formatLargeNumber(value: number): string;
	export default formatLargeNumber;

}
declare module 'zan-utils/lib/money/tozhCn' {
	 function tozhCN(num: string | number): string;
	export default tozhCN;

}
declare module 'zan-utils/lib/money/index' {
	import formatLargeNumber from 'zan-utils/src/money/formatLargeNumber';
	import tozhCn from 'zan-utils/src/money/tozhCn'; const _default: {
	    formatLargeNumber: typeof formatLargeNumber;
	    tozhCn: typeof tozhCn;
	};
	export default _default;

}
declare module 'zan-utils/lib/string/bem' {
	 function bem({ prefix, block, elementPrefix, modifierPrefix }: {
	    prefix?: string;
	    block: string;
	    elementPrefix?: string;
	    modifierPrefix?: string;
	}): (element?: string, modifier?: string, utils?: string) => string;
	export default bem;

}
declare module 'zan-utils/lib/string/index' {
	import bem from 'zan-utils/src/string/bem'; const _default: {
	    bem: typeof bem;
	};
	export default _default;

}
declare module 'zan-utils/lib/validate/chinaMobile' {
	 function chinaMobile(value: number | string): boolean;
	export default chinaMobile;

}
declare module 'zan-utils/lib/validate/index' {
	import chinaMobile from 'zan-utils/src/validate/chinaMobile'; const _default: {
	    chinaMobile: typeof chinaMobile;
	};
	export default _default;

}
declare module 'zan-utils/lib/index' {
	 const _default: {
	    money: {
	        formatLargeNumber: typeof import("./money/formatLargeNumber").default;
	        tozhCn: typeof import("./money/tozhCn").default;
	    };
	    string: {
	        bem: typeof import("./string/bem").default;
	    };
	    validate: {
	        chinaMobile: typeof import("./validate/chinaMobile").default;
	    };
	};
	export default _default;

}
