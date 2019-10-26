
declare const config : {
    readonly theme: {
        colors: {
            [k in 'yellow- 100 ' | 'yellow-200' | 'yellow-300' | 'grey-100' | 'grey-200' | 'grey-300' | 'grey-500' | 'grey-800' | 'grey-900' | 'black' | 'white']: string
        }
    }
}
export = config;
