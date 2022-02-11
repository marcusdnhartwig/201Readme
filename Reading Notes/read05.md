# Reading Notes 05

## All notes taken from Duckett's book and blog post

## HTML

### Ch. 5 'images'

- Images can be used to set the tone for a site in less time than it takes to read a description. 

- If you are building a site from scratch, it is good practive to create a folder for all the images the site uses.

- < image src alt title > ' hight = width ='

- Where the img is placed in the code will affect how it is displayed. 

* 3 Rules for creating images
  1. Save images in the right format
  2. Save Images at the right size.
  3. Measure images in PIXELS

- When a pic has an area that is filled with exactly the same color, it is know as flat color. Logos, illistrations, and diagrams often use flat colors. NOTE that photos of snow, sky, or grass are not flat colors. they are made up of manu subtly diffeerent fshades of the same color and are not as suited to GIF or PNG format.

- When sizing an image for use on the screen you should always set dimensions of the image in terms of pizels NOT anything else.

- Vector images differ from bitmap images and are resolution-independent. Vector images are commonly created in programs such as Adobe Illustrator. 

- Animated Gifs show several frames of an image in sequence and therefore can be used to crate simple animations.

- < figure > = contains iamages and their caption so that the two are associated.

- < figcaption > = is nested inside the fig element to caption the image.

### Ch. 11 'color'

- Foregrond color = { color : x }

- background-color = { background-color: x }

- Every color on a computer screen is created by mizing amounts of red, green, and blue. To find the color you want you can use a color piicker. 

- When picking forground and backgorund colors it is important to ensure that there is enough contrast for the text to be legible. 

- Opacity, rgba = {
     background-color: x hsla ( 0.100%  )
     opacity 0.5;
}

- CSS3 introduces an entirely new and intuitive way to speciy colors using hue, saturation, and lightness values. /\

### Ch. 12 'Text'

- The properties that allow you to control the appearance of text can be split into two groups.
  1. Those that directly affect the font and its appearance.
  2. Those that would have the same effect of text no matter what font you were using. 

* **NOTE** When choosing a typeface, it is important to understad that a browser will usually only display it if it is installed on that user's computer. 

- Specifying typefaces= font-family
- Size of type = font-size
- indenting text = text-indent
- Drop shadow = text-shadow

* **Pg. 294 for examples**

## Blog Post

### JPEG vs PNG vs GIF

- Compression can be of two types — lossless and lossy. In lossless compression, it is possible to reconstruct the original image from the compressed image because there is no information loss during compression. This is not the case in lossy compression i.e. data loss in lossy compression is irreversible. 

- JPEG is a lossy compression specification that takes advantage of human perception. It can achieve compression ratios of 1:10 without any perceivable difference in quality. Beyond this, the compression artefacts become more prominent.

- **Note** JPEG images are best suited for photographs and paintings of natural scenes where the variations in colour and intensity are smooth. However, if an image contains text or lines, where a sharp contrast between adjacent pixels is desired to highlight the proper shape, this lossy compression technique does not yield good results.

- PNG is a lossless image format using DEFLATE compression. No data is lost during compression and no compression artefacts are introduced in the image. For this reason, a PNG image would retain higher quality than an image than JPEG and would look a lot sharper, it would also occupy more space on the disk. This makes it unsuitable for storing or transferring high-resolution digital photographs but a great choice for images with text, logos and shapes with sharp edges.

- GIF is also a lossless image format that uses LZW compression algorithm. It was favoured over PNG for simple graphics in websites in its early days because the support of PNG was still growing. Given that PNG is now supported across all major devices and that PNG compression is about 5–25% better than GIF compression, GIF images are now mainly used only if the image contains animations.

- transparency indicates something that is completely invisible. Logos and icons often need to be placed on backgrounds with variable colours. Hence it is desirable, that the background of these logos and icons is made transparent so that a single image can be used over multiple background variations.

- JPEG images don’t support transparency and are hence not usable for such cases.

- PNG images support transparency in two ways — inserting an alpha channel that allows partial transparency or by declaring a single colour as transparent

- GIF images support transparency by declaring a single colour in the colour palette as transparent

- There is a significant difference in the number of colours that can be supported by these 3 formats.
JPEG images can support around 16 million colours. This is what makes them suitable for storing images of natural scenes.

- PNG images mainly have two modes — PNG8 and PNG24. PNG8 can support upto 256 colours whereas PNG24 can handle upto 16 million colours like a JPEG image. Use PNG8 for simple shapes with fewer colours and PNG24 for high quality, complex logos and shapes with rounded corners on a transparent background.

- Animation, in this case, refers to any change or movement in the image. It doesn’t necessarily have to have frame rates like an animated video, but essentially a part or the entire image changes with time.

- Of these 3 formats, only GIF supports animation. This capability makes GIF format suitable for delivering engaging ads and banners.

