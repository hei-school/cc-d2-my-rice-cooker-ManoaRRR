class Wallet {
    constructor() {
      this.CIN = {
        number: null,
        status: false // Lost: true, Not lost: false
      };
  
      this.money = {
        balance: 0
      };
  
      this.drivingLicense = {
        have: false
      };
  
      this.businessCard = {
        content: ""
      };
  
      this.idPhoto = null;
  
      this.creditCard = {
        number: null
      };
    }
  
    addCIN(number) {
      this.CIN.number = number;
      this.CIN.status = false;
      console.log("CIN added successfully.");
    }
  
    removeCIN() {
      if (this.CIN.status === false) {
        this.CIN.number = null;
        console.log("CIN removed successfully.");
      } else {
        console.log("Cannot remove lost CIN.");
      }
    }
  
    addMoney(amount) {
      this.money.balance += amount;
      console.log("Money added successfully.");
    }
  
    removeMoney(amount) {
      if (this.money.balance !== 0 && amount <= this.money.balance) {
        this.money.balance -= amount;
        console.log("Money removed successfully.");
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  
    checkBalance() {
      console.log("Current balance: " + this.money.balance);
    }
  
    addDrivingLicense() {
      this.drivingLicense.have = true;
      console.log("Driving license added successfully.");
    }
  
    removeDrivingLicense() {
      if (this.drivingLicense.have) {
        this.drivingLicense.have = false;
        console.log("Driving license removed successfully.");
      } else {
        console.log("Driving license not found.");
      }
    }
  
    showBusinessCard() {
      console.log("Business card content: " + this.businessCard.content);
    }
  
    exportBusinessCardToPDF() {
      // Logic to export business card to PDF (not implemented here)
      console.log("Business card exported to PDF.");
    }
  
    showIDPhoto() {
      console.log("ID photo: " + this.idPhoto);
    }
  
    updateIDPhoto(photo) {
      this.idPhoto = photo;
      console.log("ID photo updated successfully.");
    }
  
    showCreditCardNumber() {
      console.log("Credit card number: " + this.creditCard.number);
    }
  
    makePayment() {
      // Logic to process payment (not implemented here)
      console.log("Payment processed successfully.");
    }
  }
  
  // Example Usage:
  const myWallet = new Wallet();
  myWallet.addCIN("123456789");
  myWallet.addMoney(100);
  myWallet.checkBalance();
  myWallet.removeMoney(50);
  myWallet.checkBalance();
  myWallet.addDrivingLicense();
  myWallet.showIDPhoto();
  myWallet.updateIDPhoto("new_photo.jpg");
  myWallet.showCreditCardNumber();
  myWallet.makePayment();
  