function ticketToRide(arrayofTickets, sortCrit) {

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        sortingTickets(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }


    }
    let newArr = [];

    for (const singleLine of arrayofTickets) {
        let [destination, price, status] = singleLine.split('|')
        price = Number(price);
        let tickets = new Tickets(destination, price, status)
        newArr.push(tickets)
    }

    newArr.sort((a, b) => a.sortingTickets(b, sortCrit))
    return newArr




}

console.log(ticketToRide(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))