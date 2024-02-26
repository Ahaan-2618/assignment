class Ticket {
  constructor(guests) {
    this.guests = guests;
  }

  ticketDetails() {
    let index = 1;
    const guestDetails = [];
    let total = 0;
    this.guests.forEach((guest) => {
      total += guest.price;
      guestDetails.push(
        `Guest no. ${index} - age: ${guest.age} - (price: ${guest.price}) \n`
      );
      index = index + 1;
    });
    alert(guestDetails + `\n Total - ${total}`);
  }
}

class TicketClass {
  constructor() {
    this.tickets = [];
  }

  createTicket(numOfGuests) {
    const guests = [];
    let price;
    for (let i = 0; i < numOfGuests; i++) {
      const age = parseInt(prompt(`Enter age of guest ${i + 1}: `));
      if (age <= 2) {
        price = 0;
      } else if (age > 2 && age < 18) {
        price = 100;
      } else if (age >= 18 && age < 60) {
        price = 500;
      } else {
        price = 300;
      }
      guests.push({ age, price });
    }
    const ticket = new Ticket(guests);
    this.tickets.push(ticket);
    alert("Successfully issued tickets !!!");
  }

  checkTicket(ticketIndex) {
    alert("Checking ticket details !!! Please wait..... ");
    this.tickets[ticketIndex].ticketDetails();
  }
}

const main = () => {
  const ticketSystem = new TicketClass();
  while (true) {
    alert("Options\n 1. Generate Ticket \n 2. Validate Ticket \n 3. Exit");
    const choice = prompt("Enter your choice: ");
    if (choice === "1") {
      const numOfGuests = parseInt(prompt("Enter number of guests: "));
      ticketSystem.createTicket(numOfGuests);
    } else if (choice === "2") {
      ticketSystem.checkTicket(0);
    } else if (choice === "3") {
      alert("Exiting program.");
      break;
    } else {
      alert("Invalid choice. Please try again.");
    }
  }
};

main();
