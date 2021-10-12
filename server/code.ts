/**
 * Get request handler.
 * @param ev Request event parameter.
 * @returns HTML response.
 */
function doGet(ev: GoogleAppsScript.Events.DoGet) {
    console.log(JSON.stringify(ev, null, 4));
    return HtmlService.createTemplateFromFile(`client/index`).evaluate();
}

/**
 * Demonstration function.
 * @returns Meaningless object.
 */
function doSomething(val: any) {
    return {
        a: 1,
        b: "2",
        c: true,
        d: {
            e: "f",
        },
        val: val,
    };
}
