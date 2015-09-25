/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-detail-controller", function ($scope, actorSelectionService) {

  var movies = [
      {
          "wrapperType": "track",
          "kind": "feature-movie",
          "trackId": 272967721,
          "artistName": "Roland Emmerich",
          "trackName": "Independence Day",
          "trackCensoredName": "Independence Day",
          "trackViewUrl": "https://itunes.apple.com/us/movie/independence-day/id272967721?uo=4",
          "previewUrl": "https://www.youtube.com/watch?v=mGeIsCLOI-U",
          "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/30x30bb-85.jpg",
          "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/60x60bb-85.jpg",
          "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/500x500bb-85.jpg",
          "collectionPrice": 14.99,
          "trackPrice": 14.99,
          "trackRentalPrice": 2.99,
          "collectionHdPrice": 14.99,
          "trackHdPrice": 14.99,
          "trackHdRentalPrice": 3.99,
          "releaseDate": "1996-08-09T07:00:00Z",
          "collectionExplicitness": "notExplicit",
          "trackExplicitness": "notExplicit",
          "trackTimeMillis": 8692025,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Sci-Fi & Fantasy",
          "contentAdvisoryRating": "PG-13",
          "longDescription": "Celebrate 75 Years of Independence with 20th Century Fox! On July 2nd, communications systems worldwide are sent into chaos by a strange atmospheric interference. First thought to be meteors, they are later revealed to be gigantic spacecraft, piloted by a mysterious alien species who have set out to launch an attack throughout the globe. On July 3rd, the aliens all but obliterate New York, Los Angeles, and Washington when a band of survivors devise a plan to fight back against the enslaving aliens. On July 4th, humanity fights for its freedom.",
          "radioStationUrl": "https://itunes.apple.com/station/idra.272967721"
      },
      {
          "wrapperType": "track",
          "kind": "feature-movie",
          "trackId": 957056432,
          "artistName": "Matthew Vaughn",
          "trackName": "Kingsman: The Secret Service",
          "trackCensoredName": "Kingsman: The Secret Service",
          "trackViewUrl": "https://itunes.apple.com/us/movie/kingsman-the-secret-service/id957056432?uo=4",
          "previewUrl": "https://www.youtube.com/watch?v=kl8F-8tR8to",
          "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/30x30bb-85.jpg",
          "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/60x60bb-85.jpg",
          "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/500x500bb-85.jpg",
          "collectionPrice": 14.99,
          "trackPrice": 14.99,
          "trackRentalPrice": 4.99,
          "collectionHdPrice": 14.99,
          "trackHdPrice": 14.99,
          "trackHdRentalPrice": 5.99,
          "releaseDate": "2015-02-13T08:00:00Z",
          "collectionExplicitness": "notExplicit",
          "trackExplicitness": "notExplicit",
          "trackTimeMillis": 7749040,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Action & Adventure",
          "contentAdvisoryRating": "R",
          "shortDescription": "A super-secret organization recruits an unrefined but promising street kid into the agency's ultra-",
          "longDescription": "A super-secret organization recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a dire global threat emerges from a twisted tech genius. A phenomenal cast, including Colin Firth, Samuel L. Jackson and Michael Caine, lead this action-packed spy-thriller directed by Matthew Vaughn (X-Men: First Class).",
          "radioStationUrl": "https://itunes.apple.com/station/idra.957056432"
      },
      {
          "wrapperType": "track",
          "kind": "feature-movie",
          "trackId": 805178535,
          "artistName": "Phil Lord & Christopher Miller",
          "trackName": "The LEGO Movie",
          "trackCensoredName": "The LEGO Movie",
          "trackViewUrl": "https://itunes.apple.com/us/movie/the-lego-movie/id805178535?uo=4",
          "previewUrl": "https://www.youtube.com/watch?v=fZ_JOBCLF-I",
          "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/30x30bb-85.jpg",
          "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/60x60bb-85.jpg",
          "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/500x500bb-85.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 9.99,
          "collectionHdPrice": 17.99,
          "trackHdPrice": 17.99,
          "releaseDate": "2014-02-07T08:00:00Z",
          "collectionExplicitness": "notExplicit",
          "trackExplicitness": "notExplicit",
          "trackTimeMillis": 6033285,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Kids & Family",
          "contentAdvisoryRating": "PG",
          "shortDescription": "The first-ever full-length theatrical LEGO movie follows Emmet, an ordinary, rules-following,",
          "longDescription": "The first-ever full-length theatrical LEGO movie follows Emmet, an ordinary, rules-following, perfectly average LEGO mini figure who is mistakenly identified as the most extraordinary person and the key to saving the world. He is drafted into a fellowship of strangers on an epic quest to stop an evil tyrant, a journey for which Emmet is hopelessly and hilariously underprepared.",
          "radioStationUrl": "https://itunes.apple.com/station/idra.805178535"
      },
      {
          "wrapperType": "track",
          "kind": "feature-movie",
          "trackId": 320384447,
          "artistName": "Victor Fleming",
          "trackName": "The Wizard of Oz",
          "trackCensoredName": "The Wizard of Oz",
          "trackViewUrl": "https://itunes.apple.com/us/movie/the-wizard-of-oz/id320384447?uo=4",
          "previewUrl": "https://www.youtube.com/watch?v=DylgNj4YQVc",
          "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/30x30bb-85.jpg",
          "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/60x60bb-85.jpg",
          "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/500x500bb-85.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 9.99,
          "trackRentalPrice": 2.99,
          "collectionHdPrice": 14.99,
          "trackHdPrice": 14.99,
          "trackHdRentalPrice": 3.99,
          "releaseDate": "1939-04-23T08:00:00Z",
          "collectionExplicitness": "notExplicit",
          "trackExplicitness": "notExplicit",
          "trackTimeMillis": 6105375,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Musicals",
          "contentAdvisoryRating": "G",
          "longDescription": "\"There's no place like home...\" Entirely remastered, the colorful characters and unforgettable songs of Oz come alive as never before. This magical cinematic event finds Kansas farm girl Judy Garland (\"A Star is Born,\" \"Meet Me in St. Louis\") caught in a tornado and magically transported to the Land of Oz. Needing help to return home, she is told to follow the Yellow Brick Road and find the powerful Wizard (Frank Morgan). On her perilous journey, she is befriended by the Scarecrow (Ray Bolger), the Tin Man (Jack Haley), and the Cowardly Lion (Bert Lahr) who help her battle the Wicked Witch of the West (Margaret Hamilton) and her flying monkeys. Based on the classic book by Frank L. Baum, \"The Wizard of Oz\" is a dazzling motion picture achievement, featuring unforgettable songs (including Oscar-winner \"Over the Rainbow\"), scenery, and costumes. The film had 5 Academy Award nominations, and Garland was awarded a special Oscar for her outstanding performance.",
          "radioStationUrl": "https://itunes.apple.com/station/idra.320384447"
      }
  ];

    $scope.initActor = function(){
        var selectedActor = actorSelectionService.getSelectedActor();
        if( Object.keys(selectedActor).length === 0) {
            var selectedActor = {
                "wrapperType": "artist",
                "artistType": "Artist",
                "artistName": "John Sawyer",
                "artistLinkUrl": "https://itunes.apple.com/us/artist/john-sawyer/id253584821?uo=4",
                "artistId": 253584821,
                "amgArtistId": 122340,
                "primaryGenreName": "Tribute",
                "primaryGenreId": 100022,
                "radioStationUrl": "https://itunes.apple.com/station/idra.253584821",
                "bio": "John Sawyer is an Oscar-winning actress who became popular after playing the title role in the \"Lara Croft\" blockbuster movies, as well as Mr. & Mrs. Smith (2005), Wanted (2008), Salt (2010) and Maleficent (2014). Off-screen, Jolie has become prominently involved in international charity projects, especially those involving refugees. She often appears on many \"most beautiful women\" lists, and she has a personal life that is avidly covered by the tabloid press."
            };
        }
        $scope.actor = selectedActor;
    };
    $scope.initActor();
    $scope.movies = movies;

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            }]
    };

});
