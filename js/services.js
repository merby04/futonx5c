angular.module('starter.services', [])

.factory('FutsalDB', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
    var futsals = [
    { name: 'Futsal Triditi', id: 1 ,tempat: 'Cibiru, Kab. Bandung',mapLoc:'33',logo:'img/futon7.jpg',
    lapangan:[
    {id:'lap1',nama:'Lapangan 1',jenis:'Standard',harga:'60000',image:'img/lap1.jpg'}
    ]},

    { name: 'Futsal 35', id: 2 ,tempat: 'Antapani, Kota Bandung',mapLoc:'3323',logo:'img/gemionic/35',logo:'img/futon2.jpg',
    lapangan:[
    {id:'lap2',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap3.jpg'},
    {id:'lap3',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap2.jpg'},
    {id:'lap4',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap4.jpg'}]
    },
    { name: 'Futsal Dewa', id: 3 ,tempat: 'Anatapani, 34 Bandung',mapLoc:'33',logo:'img/futon3.jpg',
    lapangan:[
    {id:'lap5',nama:'Lapangan 1',jenis:'Standard',harga:'50000',image:'img/lap3.jpg'},
    {id:'lap6',nama:'Lapangan 2',jenis:'Standard',harga:'50000',image:'img/lap2.jpg'}]
    },
    { name: 'Erlangga Futsal', id: 4 ,tempat: 'Cinunuk, Kab Bandung',mapLoc:'33',logo:'img/futon4.jpg',
      lapangan:[
    {id:'lap7',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap3.jpg'},
    {id:'lap8',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap5.jpg'},
    {id:'lap9',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap6.jpg'}]
    },
    { name: 'Mayangsari Futsal Center', id: 5 ,tempat: 'Cibiru, Kab. Bandung',mapLoc:'33',logo:'img/futon5.jpg',
       lapangan:[
    {id:'lap10',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap3.jpg'},
    {id:'lap11',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap2.jpg'},
    {id:'lap12',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap4.jpg'}]
    },
    { name: 'Bandung Indah Permai', id: 6 ,tempat: 'Koppo, Bandung',mapLoc:'33',logo:'img/futon6.jpg',
       lapangan:[
    {id:'lap13',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap6.jpg'},
    {id:'lap14',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap2.jpg'},
    {id:'lap15',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap4.jpg'}]
    },
    { name: 'Futsal Sudirman', id: 7 ,tempat: 'Jalan Sudirman, Kota Bandung',mapLoc:'33',logo:'img/futon7.jpg',
       lapangan:[
    {id:'lap16',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap3.jpg'},
    {id:'lap17',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap5.jpg'},
    {id:'lap18',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap2.jpg'}]
    },
    { name: 'Futsal Adiyaksa ', id: 8 ,tempat: 'Adiyaksa, Bandung',mapLoc:'33',logo:'img/futon1.jpg',
       lapangan:[
    {id:'lap19',nama:'Lapangan Besar',jenis:'Besar',harga:'120000',image:'img/lap3.jpg'},
    {id:'lap20',nama:'Lapangan Kecil 1',jenis:'Besar',harga:'70000',image:'img/lap6.jpg'},
    {id:'lap21',nama:'Lapangan Kecil 2',jenis:'Kecil',harga:'70000',image:'img/lap4.jpg'}]
    }
  ];
  return {
    all: function() {
      return futsals;
    },
    remove: function(id) {
      futsals.splice(futsals.indexOf(id), 1);
    },
    get: function(futsalId) {
      for (var i = 0; i < futsals.length; i++) {
        if (futsals[i].id === parseInt(futsalId)) {
          return futsals[i];
        }
      }
      return null;
    }
  };
});
