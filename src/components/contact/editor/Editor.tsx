"use client";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {editorConfig} from "./config";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "@/components/contact/editor/plugin/ToolbarPlugin";

export default function Editor() {
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <ToolbarPlugin/>
            <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input"/>}
                placeholder={<div className="placeholder">Start typing...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin/>
            <ListPlugin/>
            <LinkPlugin/>
            <AutoFocusPlugin/>
        </LexicalComposer>
    );
}
