class Validator {
  constructor(username) {
    this.username = username;
    this.regexpValidator = new RegExp('^[^\-\d_]{1}[a-z\-_]+[^\-\d_]{1}$', 'i');

    this.regexpStart = new RegExp('^[^\-0-9_]{1}', 'ig');
    this.regexpEnd = new RegExp('[^\-0-9_]{1}$', 'ig');
    this.regexpNumbers = new RegExp('[0-9]{4}', 'ig');
    this.regexpMain = new RegExp('[a-z\-_]+', 'ig');
    this.regexpMainInvalid = new RegExp('[^a-z\-_0-9]+', 'ig');
  }

  validateUsername() {
    let isLatin = true;

    if (this.username.match(this.regexpMain)) {
      if (this.username.match(this.regexpMain).length > 1 && this.username.match(this.regexpMainInvalid) ) {
        isLatin = false;
      }
    }
    
    return this.username.match(this.regexpStart) && this.username.match(this.regexpEnd) && !this.username.match(this.regexpNumbers) && this.username.match(this.regexpMain) && isLatin;
  }
}

export default Validator;