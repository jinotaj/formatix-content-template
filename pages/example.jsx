export default ({ name }) => (
  <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:fox="http://xmlgraphics.apache.org/fop/extensions">
    <fo:layout-master-set>
      <fo:simple-page-master master-name="A4" page-height="29.7cm" page-width="21.0cm" margin="2cm">
        <fo:region-body />
      </fo:simple-page-master>
    </fo:layout-master-set>
    <fo:page-sequence master-reference="A4" font="10pt 'OpenSans'">
      <fo:flow flow-name="xsl-region-body">
        <fo:block>Hello {name}.</fo:block>
      </fo:flow>
    </fo:page-sequence>
  </fo:root>
);
