interface StyleConfigInterface {
    headlineStyles: string;
    bodyTextStyles: string;
    backgroundStyles: string;
    buttonStyles: string;
}
export declare const getStylesConfigFromPalette: (palette: string) => StyleConfigInterface;
export {};
