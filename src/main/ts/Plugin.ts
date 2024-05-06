import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-placeholder', {
    text: 'tinymce-placeholder button',
    onAction: () => {
      editor.setContent('<p>content added from tinymce-placeholder</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-placeholder', setup);
};
