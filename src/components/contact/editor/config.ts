import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {ListItemNode, ListNode} from "@lexical/list";
import {LinkNode} from "@lexical/link";

export const editorConfig = {
    namespace: "MyEditor",
    theme: {},
    onError(error: Error) {
        console.error(error);
    },
    nodes: [
        HeadingNode,
        QuoteNode,
        ListNode,
        ListItemNode,
        LinkNode,
    ],
};
