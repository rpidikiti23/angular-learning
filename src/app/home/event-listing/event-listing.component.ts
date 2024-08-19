import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent {

  @Input() eventId: number | null = null;

  cards = [
    {
      id:1,
      header: 'Grand Ballroom',
      subheader: 'Elegant Venue',
      imageUrl: 'https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg',
      // content : "TEST"
      content: 'The Grand Ballroom offers a majestic space adorned with luxurious decor and expansive areas. It’s perfect for large-scale events such as weddings, galas, and corporate functions. The hall features high ceilings, elegant chandeliers, and sophisticated furnishings.'
    },
    {
      id:2,
      header: 'Classic Banquet',
      subheader: 'Timeless Charm',
      imageUrl: 'https://media.istockphoto.com/id/492542118/photo/elegant-banquet-hall-interior.jpg?s=612x612&w=0&k=20&c=A4FP8QdSVi--k0vxMPcfXf7qwi2H3jNq3KmgH8dSZY4=',
      content: 'Classic Banquet Hall combines timeless charm with elegant design, making it an ideal venue for any special occasion. It boasts classic decor, ornate details, and ample space for seating. This hall is perfect for formal dinners, receptions, and elegant gatherings.'
    },
    {
      id:3,
      header: 'Rooftop Venue',
      subheader: 'Panoramic Views',
      imageUrl: 'https://media.istockphoto.com/id/178739543/photo/banquet-hall-restaurant.jpg?s=612x612&w=0&k=20&c=Ze5HUqoWRKpVAnG5JqxZ-O92-16_42jZbujUrU2TK7U=',
      // content : "TEST"
      content: 'Our Rooftop Venue provides breathtaking panoramic views, making it an ideal choice for outdoor events and receptions. With its open-air design, this venue offers a unique experience for guests to enjoy scenic vistas and fresh air while celebrating special occasions like summer parties and evening gatherings.'
    },
    {
      id:4,
      header: 'Contemporary Space',
      subheader: 'Stylish and Modern',
      imageUrl: 'https://thumbs.dreamstime.com/b/beautifully-decorated-banquet-hall-wedding-reception-elegant-luxurious-stage-sofas-decoration-guests-welcomed-116303860.jpg',
      // content : "TEST"
      content: 'The Contemporary Space features a sleek and modern design with stylish elements and state-of-the-art amenities. This versatile venue is suitable for dynamic events such as product launches, corporate meetings, and trendy social events. Its open layout and chic decor create a sophisticated atmosphere for any occasion.'
    },
    {
      id:5,
      header: 'Opulent Hall',
      subheader: 'Luxurious Experience',
      imageUrl: 'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid',
      content : "TEST 12345678 sdgdfgbdfg"
      // content: 'Opulent Hall offers a truly luxurious experience with its grand architecture and sophisticated decor. This venue is designed to impress with its high-end finishes, elegant furnishings, and intricate details. Ideal for high-profile events, weddings, and extravagant parties, Opulent Hall ensures a memorable and refined experience.'
    }
  ];

  onClick() {
    console.log("Book Now button clicked!");
  }
}
