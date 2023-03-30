

class MimeType{
  static JSon = 0;
  static Text = 1;
  static Pdf = 2;
  static Binary = 3;

  static toString(mimeType) {
    switch(mimeType) {
      case MimeType.JSon:
        return 'application/json';
      case MimeType.Text:
        return 'text/plain';
      case MimeType.Pdf:
        return 'application/Pdf'
      case MimeType.Binary:
        return 'application/octet-stream';
      default:
        return 'text/plain'
    }
  }
}

module.exports = {
  MimeType
}