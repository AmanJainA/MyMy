// ============================================================
// EDIT EVERYTHING HERE — names, dates, events, venue, colours
// ============================================================

export const weddingData = {
  groom: {
    firstName: 'Aman',
    fullName: 'Aman Jain',
    fatherName: 'Mr. Rakesh Jain',
    motherName: 'Mrs. Sunita Jain',
  },
  bride: {
    firstName: 'Nishu',
    fullName: 'Nishu Bharti',
    fatherName: 'Mr. Deepak Bharti',
    motherName: 'Mrs. Anita Bharti',
  },
  monogram: 'A • N',

  // ISO date used by the countdown — edit to your real date & time
  weddingDateISO: '2026-11-24T19:00:00',
  weddingDateLabel: '24th November 2026',
  weddingDateShort: '24 . 11 . 2026',
  city: 'Jaipur, Rajasthan',

  // Background love song — you must supply your own licensed audio file.
  // Drop it at: public/audio/wedding-song.mp3
  songSrc: '/audio/wedding-song.mp3',

  venue: {
    name: 'Rambagh Haveli Lawns',
    address: 'Bhawani Singh Road, near Rambagh Circle, Jaipur, Rajasthan',
    mapsSearchQuery: 'Rambagh Palace Jaipur',
  },

  events: [
    {
      key: 'mehendi',
      name: 'Mehendi',
      date: '22 Nov 2026',
      time: '4:00 PM',
      dressCode: 'Pastel Ethnic',
      desc: 'Henna, dholak beats and marigold hues at the haveli courtyard.',
      icon: 'hand',
      venueName: 'Rambagh Haveli Lawns',
      mapsSearchQuery: 'Rambagh Palace Jaipur',
    },
    {
      key: 'haldi',
      name: 'Haldi',
      date: '23 Nov 2026',
      time: '10:00 AM',
      dressCode: 'Yellow Traditional',
      desc: 'A morning of turmeric blessings, laughter and old family songs.',
      icon: 'pot',
      venueName: 'Rambagh Haveli Lawns',
      mapsSearchQuery: 'Rambagh Palace Jaipur',
    },
    {
      key: 'sangeet',
      name: 'Sangeet',
      date: '23 Nov 2026',
      time: '7:00 PM',
      dressCode: 'Indo-Western Glam',
      desc: 'Dance floor open, dholi ready — bring your best moves.',
      icon: 'music',
      venueName: 'Rambagh Haveli Lawns',
      mapsSearchQuery: 'Rambagh Palace Jaipur',
    },
    {
      key: 'wedding',
      name: 'Pheras',
      date: '24 Nov 2026',
      time: '8:00 PM',
      dressCode: 'Traditional Formal',
      desc: 'Seven vows under a mandap of roses and jasmine.',
      icon: 'fire',
      venueName: 'Rambagh Haveli Lawns',
      mapsSearchQuery: 'Rambagh Palace Jaipur',
    },
    {
      key: 'reception',
      name: 'Reception',
      date: '25 Nov 2026',
      time: '7:30 PM',
      dressCode: 'Evening Formal',
      desc: 'An evening of feasting, toasts and twinkling fairy lights.',
      icon: 'glass',
      venueName: 'Rambagh Haveli Lawns',
      mapsSearchQuery: 'Rambagh Palace Jaipur',
    },
  ],
};
