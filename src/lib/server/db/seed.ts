import { count } from 'drizzle-orm';
import { dinosaur, type DinosaurInsert } from './schema';
import { db } from './index';

export async function runSeed() {
  const existing = await db
    .select({
      count: count(),
    })
    .from(dinosaur);

  if (existing?.at(0)?.count === 0) {
    await db.insert(dinosaur).values(allDinos);

    console.log('🌱 -- seeded -- 🌱');
  } else {
    console.log('🌱 -- already seeded -- 🌱');
  }
}

const allDinos: DinosaurInsert[] = [
  {
    name: 'Aardonyx',
    description: 'An early stage in the evolution of sauropods.',
  },
  {
    name: 'Abelisaurus',
    description: '"Abel\'s lizard" has been reconstructed from a single skull.',
  },
  {
    name: 'Abrictosaurus',
    description: 'An early relative of Heterodontosaurus.',
  },
  {
    name: 'Abrosaurus',
    description: 'A close Asian relative of Camarasaurus.',
  },
  {
    name: 'Abydosaurus',
    description: "This sauropod's intact skull was discovered in 2010.",
  },
  {
    name: 'Acanthopholis',
    description: "No, it's not a city in Greece.",
  },
  {
    name: 'Achelousaurus',
    description: 'Might this have been a growth stage of Pachyrhinosaurus?',
  },
  {
    name: 'Achillobator',
    description: 'This fierce raptor was discovered in modern-day Mongolia.',
  },
  {
    name: 'Acristavus',
    description: 'This early hadrosaur lacked any ornamentation on its skull.',
  },
  {
    name: 'Acrocanthosaurus',
    description:
      'The largest meat-eating dinosaur of the early Cretaceous period.',
  },
  {
    name: 'Acrotholus',
    description: "North America's earliest bone-headed dinosaur.",
  },
  {
    name: 'Adamantisaurus',
    description: 'This titanosaur was named 50 years after its discovery.',
  },
  {
    name: 'Adasaurus',
    description: "This raptor's hind claws were unusually small.",
  },
  {
    name: 'Adeopapposaurus',
    description: 'A close relative of Massospondylus.',
  },
  {
    name: 'Aegyptosaurus',
    description: 'Try and guess which country this dinosaur was found in.',
  },
  {
    name: 'Aeolosaurus',
    description: 'Could this titanosaur have reared up on its hind legs?',
  },
  {
    name: 'Aerosteon',
    description: 'This air-boned dinosaur may have breathed like a bird.',
  },
  {
    name: 'Afrovenator',
    description:
      'One of the few carnivores ever to be dug up in northern Africa.',
  },
  {
    name: 'Agathaumas',
    description: 'The first ceratopsian dinosaur ever discovered.',
  },
  {
    name: 'Agilisaurus',
    description: 'This "agile lizard" was one of the earliest ornithopods.',
  },
  {
    name: 'Agujaceratops',
    description: 'It was once classified as a species of Chasmosaurus.',
  },
  {
    name: 'Agustinia',
    description: 'A large, spiny-backed sauropod.',
  },
  {
    name: 'Ajkaceratops',
    description: 'The first ceratopsian ever to be discovered in Europe.',
  },
  {
    name: 'Alamosaurus',
    description:
      "No, it wasn't named after the Alamo, but it should have been.",
  },
  {
    name: 'Alaskacephale',
    description:
      'Can you guess which state this pachycephalosaur was found in?',
  },
  {
    name: 'Albalophosaurus',
    description: 'One of the few dinosaurs ever to be discovered in Japan.',
  },
  {
    name: 'Albertaceratops',
    description: 'The most basal "centrosaurine" yet identified.',
  },
  {
    name: 'Albertadromeus',
    description: 'This petite ornithopod was recently discovered in Canada.',
  },
  {
    name: 'Albertonykus',
    description: 'A tiny, birdlike, North American dinosaur.',
  },
  {
    name: 'Albertosaurus',
    description: 'This carnivorous dinosaur was a close relative of T. Rex.',
  },
  {
    name: 'Alectrosaurus',
    description: 'Few specimens of this "unmarried lizard" have been found.',
  },
  {
    name: 'Aletopelta',
    description: 'The first ankylosaur known to have lived in Mexico.',
  },
  {
    name: 'Alioramus',
    description:
      'Everything we know about this tyrannosaur is based on a single skull.',
  },
  {
    name: 'Allosaurus',
    description: 'The apex predator of late Jurassic North America.',
  },
  {
    name: 'Altirhinus',
    description: 'This "high-nosed" plant eater resembled an early hadrosaur.',
  },
  {
    name: 'Alvarezsaurus',
    description: 'A bird-like dinosaur of the late Cretaceous.',
  },
  {
    name: 'Alwalkeria',
    description: 'This Indian dinosaur was one of the earliest saurischians.',
  },
  {
    name: 'Alxasaurus',
    description: 'An early relative of the bizarre Therizinosaurus.',
  },
  {
    name: 'Amargasaurus',
    description: 'A bizarre, spined sauropod from South America.',
  },
  {
    name: 'Amazonsaurus',
    description: 'One of the few dinosaurs to be found in the Amazon basin.',
  },
  {
    name: 'Ammosaurus',
    description:
      'This may (or may not) have been the same dinosaur as Anchisaurus.',
  },
  {
    name: 'Ampelosaurus',
    description: 'One of the best-known of the armored titanosaurs.',
  },
  {
    name: 'Amphicoelias',
    description: 'Could it have been the biggest dinosaur that ever lived?',
  },
  {
    name: 'Amurosaurus',
    description: 'The most complete hadrosaur to be discovered in Russia.',
  },
  {
    name: 'Anabisetia',
    description: 'The best-attested South American ornithopod.',
  },
  {
    name: 'Anatosaurus',
    description:
      'This dinosaur is now known as either Anatotitan or Edmontosaurus.',
  },
  {
    name: 'Anatotitan',
    description: 'This hadrosaur\'s name means "giant duck".',
  },
  {
    name: 'Anchiceratops',
    description: 'This dinosaur had a distinctively shaped frill.',
  },
  {
    name: 'Anchiornis',
    description: 'A four-winged dino-bird that resembled Microraptor.',
  },
  {
    name: 'Anchisaurus',
    description: 'One of the first dinosaurs ever to be dug up in the U.S.',
  },
  {
    name: 'Andesaurus',
    description: 'This titanosaur rivaled Argentinosaurus in size.',
  },
  {
    name: 'Angaturama',
    description: 'A Brazilian relative of Spinosaurus.',
  },
  {
    name: 'Angolatitan',
    description: 'The first dinosaur ever to be discovered in Angola.',
  },
  {
    name: 'Angulomastacator',
    description: 'This dinosaur had a strangely shaped upper jaw.',
  },
  {
    name: 'Animantarx',
    description: 'This "living fortress" was discovered in an unusual way.',
  },
  {
    name: 'Ankylosaurus',
    description:
      'This dinosaur was the Cretaceous equivalent of a Sherman tank.',
  },
  {
    name: 'Anodontosaurus',
    description: 'This "toothless lizard" actually had a full set of choppers.',
  },
  {
    name: 'Anserimimus',
    description: 'This "goose mimic" didn’t bear much of a resemblance.',
  },
  {
    name: 'Antarctopelta',
    description: 'The first dinosaur fossil ever discovered in Antarctica.',
  },
  {
    name: 'Antarctosaurus',
    description: 'This titanosaur may or may not have lived in Antarctica.',
  },
  {
    name: 'Antetonitrus',
    description: 'Either a very late prosauropod or a very early sauropod.',
  },
  {
    name: 'Anzu',
    description:
      'This Oviraptor relative was recently discovered in North America.',
  },
  {
    name: 'Aorun',
    description: 'A small theropod of late Jurassic Asia.',
  },
  {
    name: 'Apatosaurus',
    description: 'The dinosaur formerly known as Brontosaurus.',
  },
  {
    name: 'Appalachiosaurus',
    description: 'One of the few dinosaurs ever to be found in Alabama.',
  },
  {
    name: 'Aquilops',
    description:
      'The earliest ceratopsian ever to be discovered in North America.',
  },
  {
    name: 'Aragosaurus',
    description: 'named after the Aragon region of Spain.',
  },
  {
    name: 'Aralosaurus',
    description:
      'Not much is known about this central Asian duck-billed dinosaur.',
  },
  {
    name: 'Archaeoceratops',
    description: 'Possibly the smallest ceratopsian that ever lived.',
  },
  {
    name: 'Archaeopteryx',
    description:
      'This ancient dino-bird was about the size of a modern pigeon.',
  },
  {
    name: 'Archaeornithomimus',
    description: 'A likely ancestor of Ornithomimus.',
  },
  {
    name: 'Arcovenator',
    description: 'This fierce abelisaur was recently discovered in France.',
  },
  {
    name: 'Arcusaurus',
    description: 'This prosauropod was recently discovered in South Africa.',
  },
  {
    name: 'Argentinosaurus',
    description: 'Possibly the largest dinosaur that ever lived.',
  },
  {
    name: 'Argyrosaurus',
    description: 'A plus-sized titanosaur from South America.',
  },
  {
    name: 'Aristosuchus',
    description: 'This "noble crocodile" was actually a dinosaur.',
  },
  {
    name: 'Arrhinoceratops',
    description: 'This ceratopsian was named for its "missing" nose horn.',
  },
  {
    name: 'Astrodon',
    description: 'The official state dinosaur of Maryland.',
  },
  {
    name: 'Asylosaurus',
    description: 'This "unharmed lizard" escaped destruction in World War II.',
  },
  {
    name: 'Atlasaurus',
    description: 'This sauropod had unusually long legs.',
  },
  {
    name: 'Atlascopcosaurus',
    description: 'named after a manufacturer of digging equipment.',
  },
  {
    name: 'Atrociraptor',
    description: 'This "cruel thief" wasn\'t as atrocious as its name implies.',
  },
  {
    name: 'Aublysodon',
    description: 'This tyrannosaur was named after a single tooth.',
  },
  {
    name: 'Aucasaurus',
    description: 'This predator was a close relative of Carnotaurus.',
  },
  {
    name: 'Auroraceratops',
    description: 'A close relative of Archaeoceratops.',
  },
  {
    name: 'Australodocus',
    description: 'This sauropod was found in modern-day Tanzania.',
  },
  {
    name: 'Australovenator',
    description: 'A recently discovered carnivore from Australia.',
  },
  {
    name: 'Austroraptor',
    description: 'The largest raptor from South America.',
  },
  {
    name: 'Austrosaurus',
    description: 'This titanosaur was discovered near a train station.',
  },
  {
    name: 'Avaceratops',
    description: 'This ceratopsian is represented by a single juvenile.',
  },
  {
    name: 'Aviatyrannis',
    description: 'This "grandmother tyrant" was one of the first tyrannosaurs.',
  },
  {
    name: 'Avimimus',
    description: 'A particularly bird-like cousin of Oviraptor.',
  },
  {
    name: 'Bactrosaurus',
    description: 'One of the earliest of the duck-billed dinosaurs.',
  },
  {
    name: 'Bagaceratops',
    description: 'A small ceratopsian from central Asia.',
  },
  {
    name: 'Bagaraatan',
    description: 'No one is quite sure how to classify this theropod.',
  },
  {
    name: 'Bahariasaurus',
    description: 'This obscure carnivore may have been the size of T. Rex.',
  },
  {
    name: 'Balaur',
    description: 'This "stocky dragon" was recently discovered in Romania.',
  },
  {
    name: 'Bambiraptor',
    description: 'Yes, this tiny raptor was named after you-know-who.',
  },
  {
    name: 'Barapasaurus',
    description: 'Probably the first of the giant sauropods.',
  },
  {
    name: 'Barilium',
    description: 'Yet another iguanodontid ornithopod of the British Isles.',
  },
  {
    name: 'Barosaurus',
    description: 'An enormous plant-eater with a tiny head.',
  },
  {
    name: 'Barsboldia',
    description: 'This hadrosaur was named after Rinchen Barsbold.',
  },
  {
    name: 'Baryonyx',
    description: "You wouldn't want to clip this dinosaur's claws.",
  },
  {
    name: 'Batyrosaurus',
    description: 'One of the most basal hadrosaurs yet identified.',
  },
  {
    name: 'Becklespinax',
    description: 'A strangely named theropod of the early Cretaceous period.',
  },
  {
    name: 'Beipiaosaurus',
    description: 'The only known feathered therizinosaur.',
  },
  {
    name: 'Beishanlong',
    description: 'This bird mimic weighed over half a ton.',
  },
  {
    name: 'Bellusaurus',
    description: 'A herd of this sauropod drowned in a flash flood.',
  },
  {
    name: 'Berberosaurus',
    description: 'This "Berber lizard" has proven difficult to classify.',
  },
  {
    name: 'Bicentenaria',
    description: "This dinosaur was named for Argentina's 200th anniversary.",
  },
  {
    name: 'Bistahieversor',
    description: 'This tyrannosaur had more teeth than T. Rex.',
  },
  {
    name: 'Bonapartenykus',
    description:
      'This feathered dinosaur was found in close proximity to its eggs.',
  },
  {
    name: 'Bonitasaura',
    description: "This titanosaur wasn't as beautiful as its name implies.",
  },
  {
    name: 'Borogovia',
    description: 'This theropod was named after a Lewis Carroll poem.',
  },
  {
    name: 'Bothriospondylus',
    description: 'A case study in dinosaur confusion.',
  },
  {
    name: 'Brachiosaurus',
    description: 'This dinosaur was a giant, gentle, long-necked plant-eater.',
  },
  {
    name: 'Brachyceratops',
    description: 'A little-known ceratopsian from North America.',
  },
  {
    name: 'Brachylophosaurus',
    description:
      "This duck-billed dinosaur's beak looked more like a parrot's.",
  },
  {
    name: 'Brachytrachelopan',
    description: 'This sauropod had an unusually short neck.',
  },
  {
    name: 'Bravoceratops',
    description: 'This ceratopsian was recently discovered in Texas.',
  },
  {
    name: 'Brontomerus',
    description: 'Its name is Greek for "thunder thighs".',
  },
  {
    name: 'Bruhathkayosaurus',
    description: 'Was this titanosaur bigger than Argentinosaurus?',
  },
  {
    name: 'Buitreraptor',
    description: 'The oldest raptor ever discovered in South America.',
  },
  {
    name: 'Byronosaurus',
    description: 'This theropod was a close relative of Troodon.',
  },
  {
    name: 'Camarasaurus',
    description: 'The most common sauropod of Jurassic North America.',
  },
  {
    name: 'Camarillasaurus',
    description: 'A ceratosaur of early Cretaceous western Europe.',
  },
  {
    name: 'Camelotia',
    description: 'An early member of the line that evolved into sauropods.',
  },
  {
    name: 'Camptosaurus',
    description: 'A close relative of Iguanodon.',
  },
  {
    name: 'Carcharodontosaurus',
    description: 'Its name means "great white shark lizard." Impressed yet?',
  },
  {
    name: 'Carnotaurus',
    description:
      'The shortest arms of any meat-eating dinosaur with horns to match.',
  },
  {
    name: 'Caudipteryx',
    description:
      'A birdlike dinosaur that changed the views of paleontologists.',
  },
  {
    name: 'Centrosaurus',
    description: 'Like a unicorn, this ceratopsian only had one horn.',
  },
  {
    name: 'Cerasinops',
    description: 'A small ceratopsian of the late Cretaceous.',
  },
  {
    name: 'Ceratonykus',
    description: 'This dino-bird was discovered in Mongolia in 2009.',
  },
  {
    name: 'Ceratosaurus',
    description: 'This primitive carnivore is hard to classify.',
  },
  {
    name: 'Cetiosauriscus',
    description: 'Not to be confused with the more famous Cetiosaurus.',
  },
  {
    name: 'Cetiosaurus',
    description:
      'This "whale lizard" was once mistaken for the Loch Ness Monster.',
  },
  {
    name: 'Changyuraptor',
    description: 'Was this feathered dinosaur capable of flight?',
  },
  {
    name: 'Chaoyangsaurus',
    description: 'An early ceratopsian of the late Jurassic period.',
  },
  {
    name: 'Charonosaurus',
    description: 'This duck-billed dinosaur was much bigger than an elephant.',
  },
  {
    name: 'Chasmosaurus',
    description: 'The only dinosaur that came with its own awning.',
  },
  {
    name: 'Chialingosaurus',
    description: 'One of the earliest Asian stegosaurs.',
  },
  {
    name: 'Chilantaisaurus',
    description: 'This large theropod may have been ancestral to Spinosaurus.',
  },
  {
    name: 'Chilesaurus',
    description: 'This plant-eating theropod was recently discovered in Chile.',
  },
  {
    name: 'Chindesaurus',
    description: 'This early dinosaur was a close relative of Herrerasaurus.',
  },
  {
    name: 'Chirostenotes',
    description:
      'This birdlike dinosaur has been known by three different names.',
  },
  {
    name: 'Chubutisaurus',
    description: "This titanosaur was on Tyrannotitan's lunch menu.",
  },
  {
    name: 'Chungkingosaurus',
    description: 'This early stegosaur had some primitive characteristics.',
  },
  {
    name: 'Citipati',
    description: 'This Mongolian theropod was a close relative of Oviraptor.',
  },
  {
    name: 'Claosaurus',
    description: 'This "broken lizard" was a primitive hadrosaur.',
  },
  {
    name: 'Coahuilaceratops',
    description: 'It had the longest horns of any known ceratopsian dinosaur.',
  },
  {
    name: 'Coelophysis',
    description: 'One of the most ancient dinosaurs ever to roam the earth.',
  },
  {
    name: 'Coelurus',
    description: 'This tiny dinosaur was a close relative of Compsognathus.',
  },
  {
    name: 'Colepiocephale',
    description:
      'This thick-skulled dinosaur\'s name is Greek for "knucklehead".',
  },
  {
    name: 'Compsognathus',
    description: 'This dinosaur was the size of a chicken, but much meaner.',
  },
  {
    name: 'Concavenator',
    description: 'This large theropod had a bizarre hump on its back.',
  },
  {
    name: 'Conchoraptor',
    description: 'This "conch thief" may have lunched on mollusks.',
  },
  {
    name: 'Condorraptor',
    description: 'A small theropod of middle Jurassic South America.',
  },
  {
    name: 'Coronosaurus',
    description:
      'This "crown lizard" was once classified as a species of Centrosaurus.',
  },
  {
    name: 'Corythosaurus',
    description:
      'This "Corinthian-helmeted" dino had a distinctive mating call.',
  },
  {
    name: 'Crichtonsaurus',
    description: 'This dinosaur was named after the author of Jurassic Park.',
  },
  {
    name: 'Cruxicheiros',
    description: 'This "cross-handed" dinosaur was named in 2010.',
  },
  {
    name: 'Cryolophosaurus',
    description: 'This crested dinosaur was once known as "Elvisaurus".',
  },
  {
    name: 'Cryptovolans',
    description: 'Was this the same dinosaur as Microraptor?',
  },
  {
    name: 'Cumnoria',
    description: 'It was once mistakenly classified as a species of Iguanodon.',
  },
  {
    name: 'Dacentrurus',
    description: 'The first stegosaur ever to be described.',
  },
  {
    name: 'Daemonosauru 0s',
    description: 'This "evil lizard" was a close relative of Coelophysis.',
  },
  {
    name: 'Dahalokely',
    description: 'A rare theropod from the island of Madagascar.',
  },
  {
    name: 'Dakotaraptor',
    description: 'This giant raptor was recently discovered in South Dakota.',
  },
  {
    name: 'Daspletosaurus',
    description: 'This "frightful lizard" was a close cousin of T. Rex.',
  },
  {
    name: 'Datousaurus',
    description: 'A medium-sized sauropod from middle Jurassic Asia.',
  },
  {
    name: 'Darwinsaurus',
    description: '"Darwin\'s lizard" may or may not be a valid dinosaur genus.',
  },
  {
    name: 'Deinocheirus',
    description:
      'All we know for sure about this dinosaur is the shape of its arms.',
  },
  {
    name: 'Deinodon',
    description:
      'This "terrible tooth" is important from a historical perspective.',
  },
  {
    name: 'Deinonychus',
    description: 'One of the most fearsome raptors of the Cretaceous period.',
  },
  {
    name: 'Delapparentia',
    description:
      'This ornithopod was initially classified as a species of Iguanodon.',
  },
  {
    name: 'Deltadromeus',
    description: 'An unusually speedy theropod of the middle Cretaceous.',
  },
  {
    name: 'Demandasaurus',
    description: 'A poorly understood sauropod of early Cretaceous Europe.',
  },
  {
    name: 'Diabloceratops',
    description:
      'It looked like a cross between a Triceratops and a Centrosaurus.',
  },
  {
    name: 'Diamantinasaurus',
    description: 'This titanosaur was recently discovered in Australia.',
  },
  {
    name: 'Diceratops',
    description:
      'Was this two-horned dinosaur really a specimen of Triceratops?',
  },
  {
    name: 'Dicraeosaurus',
    description: 'A medium-sized, spiny-necked sauropod.',
  },
  {
    name: 'Dilong',
    description: 'This "emperor dragon" may have been an ancestor of T. Rex.',
  },
  {
    name: 'Dilophosaurus',
    description:
      'This dinosaur was distinguished by the bony crests on its noggin.',
  },
  {
    name: 'Dimetrodon',
    description: 'This ancient synapsid had a huge sail on its back.',
  },
  {
    name: 'Diplodocus',
    description:
      'Thin at one end, much thicker in the middle, and thin again at the far end.',
  },
  {
    name: 'Dollodon',
    description: 'named after the Belgian paleontologist Louis Dollo.',
  },
  {
    name: 'Draconyx',
    description: 'This "dragon claw" lived in late Jurassic Portugal.',
  },
  {
    name: 'Dracopelta',
    description: 'This early ankylosaur was discovered in Portugal.',
  },
  {
    name: 'Dracorex',
    description:
      'The only dinosaur to be named after the "Harry Potter" books.',
  },
  {
    name: 'Dracovenator',
    description: 'This "dragon hunter" was a close relative of Dilophosaurus.',
  },
  {
    name: 'Dravidosaurus',
    description: 'This "dinosaur" may actually have been a marine reptile.',
  },
  {
    name: 'Dreadnoughtus',
    description: 'This huge titanosaur was recently discovered in Argentina.',
  },
  {
    name: 'Drinker',
    description: 'named after the famous paleontologist Edward Drinker Cope.',
  },
  {
    name: 'Dromaeosauroides',
    description: 'The only dinosaur ever to be discovered in Denmark.',
  },
  {
    name: 'Dromaeosaurus',
    description: 'This "running lizard" was probably covered with feathers.',
  },
  {
    name: 'Dromiceiomimus',
    description: 'Possibly the fastest dinosaur that ever lived.',
  },
  {
    name: 'Dryosaurus',
    description: 'A typical ornithopod of the late Jurassic.',
  },
  {
    name: 'Dryptosaurus',
    description: 'The first tyrannosaur to be discovered in the U.S.',
  },
  {
    name: 'Dubreuillosaurus',
    description: 'This megalosaur had a long, low snout.',
  },
  {
    name: 'Duriavenator',
    description: 'Yet another theropod that was once assigned to Megalosaurus.',
  },
  {
    name: 'Dyoplosaurus',
    description: 'This ankylosaur was once confused with Euoplocephalus.',
  },
  {
    name: 'Dysalotosaurus',
    description: "We know a lot about this dinosaur's growth stages.",
  },
  {
    name: 'Dyslocosaurus',
    description: 'Its name means "hard-to-place lizard".',
  },
  {
    name: 'Dystrophaeus',
    description: 'This Diplodocus-like sauropod was named by Edward Cope.',
  },
  {
    name: 'Echinodon',
    description: 'One of the few ornithopods to sport a set of canines.',
  },
  {
    name: 'Edmarka',
    description: 'This may have been a species of Torvosaurus.',
  },
  {
    name: 'Edmontonia',
    description: 'This armored dinosaur never actually lived in Edmonton.',
  },
  {
    name: 'Edmontosaurus',
    description:
      'This large, duck-billed herbivore was a contemporary of T. Rex.',
  },
  {
    name: 'Efraasia',
    description:
      'This Triassic herbivore may have been ancestral to sauropods.',
  },
  {
    name: 'Einiosaurus',
    description: 'This ceratopsian was a close relative of Centrosaurus.',
  },
  {
    name: 'Ekrixinatosaurus',
    description: 'Its name means "explosion-born lizard".',
  },
  {
    name: 'Elaphrosaurus',
    description: 'A lightweight theropod from the late Jurassic.',
  },
  {
    name: 'Elmisaurus',
    description: 'This "foot lizard" was a close relative of Oviraptor.',
  },
  {
    name: 'Elopteryx',
    description:
      'This Transylvanian dinosaur is almost as controversial as Dracula.',
  },
  {
    name: 'Elrhazosaurus',
    description: 'Once classified as a species of Valdosaurus.',
  },
  {
    name: 'Enigmosaurus',
    description: 'This "puzzle lizard" was closely related to Therizinosaurus.',
  },
  {
    name: 'Eoabelisaurus',
    description: 'The earliest abelisaurid theropod yet identified.',
  },
  {
    name: 'Eobrontosaurus',
    description: 'This "dawn brontosaurus" isn\'t accepted by most experts.',
  },
  {
    name: 'Eocarcharia',
    description: 'This "dawn shark" prowled the woodlands of northern Africa.',
  },
  {
    name: 'Eocursor',
    description:
      'This late Triassic reptile was one of the earliest true dinosaurs.',
  },
  {
    name: 'Eodromaeus',
    description: 'Yet another ancient theropod from South America.',
  },
  {
    name: 'Eolambia',
    description: 'An early hadrosaur from North America.',
  },
  {
    name: 'Eoraptor',
    description: 'This tiny dinosaur was among the first of its kind.',
  },
  {
    name: 'Eosinopteryx',
    description: 'A tiny feathered dinosaur of the late Jurassic period.',
  },
  {
    name: 'Eotriceratops',
    description: 'This "dawn Triceratops" was recently discovered in Canada.',
  },
  {
    name: 'Eotyrannus',
    description: 'This early tyrannosaur looked more like a raptor.',
  },
  {
    name: 'Epachthosaurus',
    description:
      'This "heavy lizard" was relatively primitive for its time and place.',
  },
  {
    name: 'Epidendrosaurus',
    description: 'Did this tiny dino-bird spend its life up a tree?',
  },
  {
    name: 'Epidexipteryx',
    description: 'This feathered dinosaur predated Archaeopteryx.',
  },
  {
    name: 'Equijubus',
    description: 'Its name is Greek for "horse mane".',
  },
  {
    name: 'Erectopus',
    description: 'This "upright-footed" dinosaur is a 19th-century enigma.',
  },
  {
    name: 'Erketu',
    description: 'This titanosaur had an unusually long neck.',
  },
  {
    name: 'Erliansaurus',
    description: 'A basal therizinosaur from central Asia.',
  },
  {
    name: 'Erlikosaurus',
    description: 'This late therizinosaur roamed the Mongolian forests.',
  },
  {
    name: 'Euhelopus',
    description: 'The first sauropod to be discovered in China.',
  },
  {
    name: 'Euoplocephalus',
    description: "Even this ankylosaur's eyelids were armored.",
  },
  {
    name: 'Europasaurus',
    description: 'The smallest sauropod ever discovered.',
  },
  {
    name: 'Europelta',
    description: 'This early nodosaur was recently discovered in Spain.',
  },
  {
    name: 'Euskelosaurus',
    description: 'The first dinosaur ever to be discovered in Africa.',
  },
  {
    name: 'Eustreptospondylus',
    description: 'A close cousin of Megalosaurus.',
  },
  {
    name: 'Fabrosaurus',
    description:
      'This early ornithopod may have been a species of Lesothosaurus.',
  },
  {
    name: 'Falcarius',
    description: 'A bizarre, feathered theropod from North America.',
  },
  {
    name: 'Ferganasaurus',
    description: 'The first dinosaur ever to be discovered in the USSR.',
  },
  {
    name: 'Fruitadens',
    description: 'One of the tiniest dinosaurs ever to live in North America.',
  },
  {
    name: 'Fukuiraptor',
    description:
      'One of the few carnivorous dinosaurs ever to be dug up in Japan.',
  },
  {
    name: 'Fukuisaurus',
    description: 'This ornithopod was discovered in Japan.',
  },
  {
    name: 'Fulgurotherium',
    description: 'Very little is known about this "lightning beast".',
  },
  {
    name: 'Futalognkosaurus',
    description: 'A very big, and very strangely named sauropod.',
  },
  {
    name: 'Gallimimus',
    description:
      'This "chicken mimic" roamed the plains of the late Cretaceous.',
  },
  {
    name: 'Gargoyleosaurus',
    description: 'This "gargoyle lizard" was an ancestor of Ankylosaurus.',
  },
  {
    name: 'Garudimimus',
    description: 'A relative slowpoke compared to other ornithomimids.',
  },
  {
    name: 'Gasosaurus',
    description:
      "Yes, that's its real name, and no, it isn't for the reason you think.",
  },
  {
    name: 'Gasparinisaura',
    description:
      'One of the few ornithopods known to have lived in South America.',
  },
  {
    name: 'Gastonia',
    description: "This ankylosaur was probably on Utahraptor's lunch menu.",
  },
  {
    name: 'Genyodectes',
    description: 'This dinosaur is represented by an impressive set of teeth.',
  },
  {
    name: 'Gideonmantellia',
    description: 'Guess what naturalist this dinosaur was named after.',
  },
  {
    name: 'Giganotosaurus',
    description: 'Not quite a "Gigantosaurus," but close enough.',
  },
  {
    name: 'Gigantoraptor',
    description: 'This huge oviraptorosaur weighed over two tons.',
  },
  {
    name: 'Gigantspinosaurus',
    description: 'It may or may not have been a true stegosaur.',
  },
  {
    name: 'Gilmoreosaurus',
    description: 'One of the few dinosaurs known to have suffered from cancer.',
  },
  {
    name: 'Giraffatitan',
    description:
      'Might this "giant giraffe" have been a species of Brachiosaurus?',
  },
  {
    name: 'Glacialisaurus',
    description: 'This "frozen lizard" was a close relative of Lufengosaurus.',
  },
  {
    name: 'Gobiceratops',
    description: "This ceratopsian's tiny skull was found in the Gobi Desert.",
  },
  {
    name: 'Gobisaurus',
    description: 'An unusually large ankylosaur of central Asia.',
  },
  {
    name: 'Gobivenator',
    description:
      'This feathered dinosaur gave Velociraptor a run for its money.',
  },
  {
    name: 'Gojirasaurus',
    description: 'This early predator was named after Godzilla.',
  },
  {
    name: 'Gondwanatitan',
    description: 'Yet another titanosaur from South America.',
  },
  {
    name: 'Gorgosaurus',
    description: 'Might this tyrannosaur have been a species of Albertosaurus?',
  },
  {
    name: 'Goyocephale',
    description: 'A primitive bonehead from Asia.',
  },
  {
    name: 'Graciliraptor',
    description: 'This tiny dino-bird was a close relative of Microraptor.',
  },
  {
    name: 'Gryphoceratops',
    description: 'A tiny ceratopsian of Cretaceous North America.',
  },
  {
    name: 'Gryponyx',
    description: 'This "hooked claw" was a distant sauropod ancestor.',
  },
  {
    name: 'Gryposaurus',
    description: 'One of the most common of the duck-billed dinosaurs.',
  },
  {
    name: 'Guaibasaurus',
    description: 'Was this early dinosaur a theropod or a prosauropod?',
  },
  {
    name: 'Guanlong',
    description: 'Probably the first tyrannosaur ever to walk the earth.',
  },
  {
    name: 'Hadrosaurus',
    description: 'The official state dinosaur of New Jersey.',
  },
  {
    name: 'Hagryphus',
    description: 'The largest North American oviraptor yet discovered.',
  },
  {
    name: 'Halticosaurus',
    description: 'A "nomen dubium" theropod of the early 20th century.',
  },
  {
    name: 'Haplocanthosaurus',
    description: 'A typical sauropod of the late Jurassic period.',
  },
  {
    name: 'Haplocheirus',
    description:
      'This feathered dinosaur predated Archaeopteryx by millions of years.',
  },
  {
    name: 'Harpymimus',
    description: 'named after the winged creature of Greek myth.',
  },
  {
    name: 'Haya',
    description: 'This dinosaur was named after a horse-headed Mongolian god.',
  },
  {
    name: 'Herrerasaurus',
    description: 'This carnivore roamed present-day South America.',
  },
  {
    name: 'Hesperonychus',
    description: 'A tiny North American dinosaur.',
  },
  {
    name: 'Hesperosaurus',
    description: 'The oldest stegosaur discovered in North America.',
  },
  {
    name: 'Heterodontosaurus',
    description:
      'This "different-toothed" dinosaur was a dentist\'s nightmare.',
  },
  {
    name: 'Hexing',
    description: 'This early ornithomimid was recently discovered in China.',
  },
  {
    name: 'Hexinlusaurus',
    description: 'named after the Chinese professor He Xin-Lu.',
  },
  {
    name: 'Heyuannia',
    description: 'Yet another close relative of Oviraptor.',
  },
  {
    name: 'Hippodraco',
    description: 'This "horse dragon" was recently discovered in Utah.',
  },
  {
    name: 'Homalocephale',
    description: 'This herbivore had a very flat--and very thick--skull.',
  },
  {
    name: 'Hongshanosaurus',
    description: 'This early ceratopsian is known by two skulls.',
  },
  {
    name: 'Hoplitosaurus',
    description:
      'named after the heavily armored soldiers of classical Greece.',
  },
  {
    name: 'Huabeisaurus',
    description: 'A titanosaur from northern China.',
  },
  {
    name: 'Huanghetitan',
    description:
      'Yet another contender for the biggest dinosaur that ever lived.',
  },
  {
    name: 'Huaxiagnathus',
    description: 'One of the biggest dino-birds of its time.',
  },
  {
    name: 'Huaxiaosaurus',
    description: 'Might it be an unusually large specimen of Shantungosaurus?',
  },
  {
    name: 'Huayangosaurus',
    description: 'Could this have been the ancestor of all the stegosaurs?',
  },
  {
    name: 'Huehuecanauhtlus',
    description: 'Its name is Aztec for "ancient duck".',
  },
  {
    name: 'Hungarosaurus',
    description: 'The best-attested ankylosaur ever discovered in Europe.',
  },
  {
    name: 'Huxleysaurus',
    description: 'named after the famous biologist Thomas Henry Huxley.',
  },
  {
    name: 'Hylaeosaurus',
    description: 'One of the first creatures ever to be called a dinosaur.',
  },
  {
    name: 'Hypacrosaurus',
    description: "We know a lot about this dinosaur's family life.",
  },
  {
    name: 'Hypselosaurus',
    description: "This titanosaur's eggs were a foot in diameter.",
  },
  {
    name: 'Hypselospinus',
    description: 'It was once classified as a species of Iguanodon.',
  },
  {
    name: 'Hypsibema',
    description: 'The official state dinosaur of Missouri.',
  },
  {
    name: 'Hypsilophodon',
    description: 'This man-sized herbivore liked to eat and run.',
  },
  {
    name: 'Ichthyovenator',
    description: 'This sail-backed dinosaur was recently discovered in Laos.',
  },
  {
    name: 'Ignavusaurus',
    description: 'Its name means "cowardly lizard".',
  },
  {
    name: 'Iguanacolossus',
    description: 'A brand-new ornithopod from North America.',
  },
  {
    name: 'Iguanodon',
    description: 'The second dinosaur in history ever to receive a name.',
  },
  {
    name: 'Ilokelesia',
    description: 'A primitive abelisaur from South America.',
  },
  {
    name: 'Incisivosaurus',
    description:
      'This buck-toothed dinosaur was the Cretaceous equivalent of a beaver.',
  },
  {
    name: 'Indosuchus',
    description: 'This "Indian crocodile" was actually a dinosaur.',
  },
  {
    name: 'Ingenia',
    description: 'A small, birdlike dinosaur from central Asia.',
  },
  {
    name: 'Irritator',
    description:
      'This spinosaur was named by a very frustrated paleontologist.',
  },
  {
    name: 'Isanosaurus',
    description: 'One of the first sauropods ever to walk the earth.',
  },
  {
    name: 'Isisaurus',
    description: 'Otherwise known as the Indian Statistical Institute Lizard.',
  },
  {
    name: 'Jainosaurus',
    description: 'named after the Indian paleontologist Sohan Lal Jain.',
  },
  {
    name: 'Janenschia',
    description: 'The earliest titanosaur in the fossil record.',
  },
  {
    name: 'Jaxartosaurus',
    description: 'A poorly known hadrosaur from central Asia.',
  },
  {
    name: 'Jeholosaurus',
    description: 'This ornithopod may have had an omnivorous diet.',
  },
  {
    name: 'Jeyawati',
    description: 'Its name is Zuni for "grinding mouth".',
  },
  {
    name: 'Jianchangosaurus',
    description: 'One of the earliest therizinosaurs in the fossil record.',
  },
  {
    name: 'Jinfengopteryx',
    description: 'This feathered dinosaur was once thought to be a true bird.',
  },
  {
    name: 'Jingshanosaurus',
    description: 'A close relative of Yunnanosaurus.',
  },
  {
    name: 'Jinzhousaurus',
    description: 'This Asian dinosaur was one of the first hadrosaurs.',
  },
  {
    name: 'Jobaria',
    description: 'A strange, short-tailed African sauropod.',
  },
  {
    name: 'Judiceratops',
    description: 'The earliest Chasmosaurus ancestor yet identified.',
  },
  {
    name: 'Juratyrant',
    description: 'This early tyrannosaur was discovered in England.',
  },
  {
    name: 'Juravenator',
    description: 'Why didn\'t this presumed "dino-bird" have feathers?',
  },
  {
    name: 'Kaatedocus',
    description: 'This Diplodocus relative had a characteristic grin.',
  },
  {
    name: 'Kaijiangosaurus',
    description: 'This might have been the same dinosaur as Gasosaurus.',
  },
  {
    name: 'Kazaklambia',
    description: 'This duck-billed dinosaur was discovered in Kazakhstan.',
  },
  {
    name: 'Kentrosaurus',
    description: 'A smaller, African cousin of Stegosaurus.',
  },
  {
    name: 'Kerberosaurus',
    description: 'named after the three-headed dog of Greek myth.',
  },
  {
    name: 'Khaan',
    description: 'Few small mammals dared face the wrath of this dinosaur.',
  },
  {
    name: 'Kileskus',
    description: 'Yet another "basal" tyrannosaur from central Asia.',
  },
  {
    name: 'Kinnareemimus',
    description:
      'This "bird mimic" dinosaur was recently discovered in Thailand.',
  },
  {
    name: 'Kol',
    description: 'It\'s tied with Mei for "shortest dinosaur name".',
  },
  {
    name: 'Koreaceratops',
    description: "There's evidence that this ceratopsian liked to go swimming.",
  },
  {
    name: 'Koreanosaurus',
    description: 'Guess what country this ornithopod was discovered in.',
  },
  {
    name: 'Kosmoceratops',
    description: 'This ceratopsian had a bizarre, downward-folding frill.',
  },
  {
    name: 'Kotasaurus',
    description: 'One of the few sauropods to be discovered in India.',
  },
  {
    name: 'Kritosaurus',
    description: 'A famous, but poorly understood hadrosaur.',
  },
  {
    name: 'Kryptops',
    description: 'This dinosaur came equipped with its own face mask.',
  },
  {
    name: 'Kukufeldia',
    description:
      'Yet another ornithopod that was once lumped in with Iguanodon.',
  },
  {
    name: 'Kulindadromeus',
    description: 'Why did this ornithopod dinosaur have feathers?',
  },
  {
    name: 'Kundurosaurus',
    description: 'This hadrosaur was discovered in the far east of Russia.',
  },
  {
    name: 'Labocania',
    description: 'It may or may not have been a true tyrannosaur.',
  },
  {
    name: 'Lagosuchus',
    description: 'Could this have been the ancestor of all the dinosaurs?',
  },
  {
    name: 'Lambeosaurus',
    description:
      'This duck-billed dinosaur had a hatchet-shaped crest on its noggin.',
  },
  {
    name: 'Lamplughsaura',
    description: 'This early sauropod was discovered in India.',
  },
  {
    name: 'Lanzhousaurus',
    description: "This herbivore's teeth were half a foot long.",
  },
  {
    name: 'Laosaurus',
    description: 'This dubious ornithopod was named by Othniel C. Marsh.',
  },
  {
    name: 'Lapparentosaurus',
    description: 'This sauropod was discovered in Madagascar.',
  },
  {
    name: 'Laquintasaura',
    description:
      'The first plant-eating dinosaur ever to be discovered in Venezuela.',
  },
  {
    name: 'Latirhinus',
    description: 'This duck-billed dinosaur had an enormous nose.',
  },
  {
    name: 'Leaellynasaura',
    description: 'One of the few dinosaurs to be named after a little girl.',
  },
  {
    name: 'Leinkupal',
    description: 'The latest surviving diplodocid sauropod.',
  },
  {
    name: 'Leonerasaurus',
    description: 'This prosauropod was recently discovered in Argentina.',
  },
  {
    name: 'Leptoceratops',
    description: 'One of the most primitive of all ceratopsians.',
  },
  {
    name: 'Leshansaurus',
    description: 'Did this meat-eater feast on small, armored dinosaurs?',
  },
  {
    name: 'Lesothosaurus',
    description: 'One of the earliest of all the ornithischian dinosaurs.',
  },
  {
    name: 'Lessemsaurus',
    description: 'named after the popular science writer Don Lessem.',
  },
  {
    name: 'Lexovisaurus',
    description: 'One of the oldest European stegosaurs.',
  },
  {
    name: 'Leyesaurus',
    description: 'A newly discovered prosauropod from South America.',
  },
  {
    name: 'Liaoceratops',
    description: 'A tiny ceratopsian of early Cretaceous Asia.',
  },
  {
    name: 'Liaoningosaurus',
    description: 'One of the smallest ankylosaurs in the fossil record.',
  },
  {
    name: 'Liliensternus',
    description: 'One of the largest carnivores of the Triassic period.',
  },
  {
    name: 'Limaysaurus',
    description: 'It was once classified as a species of Rebbachisaurus.',
  },
  {
    name: 'Limusaurus',
    description: 'Was this toothless theropod a vegetarian?',
  },
  {
    name: 'Linhenykus',
    description: 'This tiny dinosaur had single-clawed hands.',
  },
  {
    name: 'Linheraptor',
    description: 'This Mongolian raptor was discovered in 2008.',
  },
  {
    name: 'Linhevenato',
    description: 'r This troodont was recently discovered in Mongolia.',
  },
  {
    name: 'Lophorhothon',
    description: 'The first dinosaur ever to be discovered in Alabama.',
  },
  {
    name: 'Lophostropheus',
    description: 'This theropod lived near the Triassic/Jurassic boundary.',
  },
  {
    name: 'Loricatosaurus',
    description:
      'This stegosaur was once classified as a species of Lexovisaurus.',
  },
  {
    name: 'Lourinhanosaurus',
    description: 'Not to be confused with Lourinhasaurus, below.',
  },
  {
    name: 'Lourinhasaurus',
    description: 'Not to be confused with Lourinhanosaurus, above.',
  },
  {
    name: 'Luanchuanraptor',
    description: 'A small, poorly understood Asian raptor.',
  },
  {
    name: 'Lufengosaurus',
    description: 'A common sight at Chinese natural history museums.',
  },
  {
    name: 'Lurdusaurus',
    description: 'This ornithopod resembled a giant sloth.',
  },
  {
    name: 'Lusotitan',
    description:
      'This sauropod was once classified as a species of Brachiosaurus.',
  },
  {
    name: 'Lycorhinus',
    description: 'This dinosaur was once thought to be a mammal-like reptile.',
  },
  {
    name: 'Lythronax',
    description: 'This tyrannosaur lived on the island of Laramidia.',
  },
  {
    name: 'Machairasaurus',
    description:
      'This "short scimitar lizard" was a close relative of Oviraptor.',
  },
  {
    name: 'Macrogryphosaurus',
    description: 'Otherwise known as the Big Enigmatic Lizard.',
  },
  {
    name: 'Magnapaulia',
    description: 'The largest lambeosaurine hadrosaur yet identified.',
  },
  {
    name: 'Magnirostris',
    description: 'This ceratopsian had an unusually big beak.',
  },
  {
    name: 'Magnosaurus',
    description: 'Once thought to be a species of Megalosaurus.',
  },
  {
    name: 'Magyarosaurus',
    description:
      'This dwarf titanosaur was probably confined to a small island.',
  },
  {
    name: 'Mahakala',
    description: 'This dino-bird was named after a Buddhist deity.',
  },
  {
    name: 'Maiasaura',
    description: 'This "good mother lizard" kept close tabs on her young.',
  },
  {
    name: 'Majungasaurus',
    description: 'Fairly--or unfairly--known as the "cannibal dinosaur".',
  },
  {
    name: 'Malawisaurus',
    description: 'The first titanosaur to be found with an intact skull.',
  },
  {
    name: 'Mamenchisaurus',
    description: 'The longest-necked dinosaur that ever lived.',
  },
  {
    name: 'Manidens',
    description: 'A strangely toothed relative of Heterodontosaurus.',
  },
  {
    name: 'Mantellisaurus',
    description: 'named after the famous fossil hunter Gideon Mantell.',
  },
  {
    name: 'Mantellodon',
    description: 'This Iguanodon refugee may or may not deserve its own genus.',
  },
  {
    name: 'Mapusaurus',
    description: 'This huge carnivore was closely related to Giganotosaurus.',
  },
  {
    name: 'Marshosaurus',
    description: 'named after the famous paleontologist Othniel C. Marsh.',
  },
  {
    name: 'Martharaptor',
    description: 'This dinosaur was named after a Utah paleontologist.',
  },
  {
    name: 'Masiakasaurus',
    description: 'A bizarre, buck-toothed predator of the late Cretaceous.',
  },
  {
    name: 'Massospondylus',
    description:
      'This small, lithe, bipedal plant-eater roamed the plains of South Africa.',
  },
  {
    name: 'Maxakalisaurus',
    description: 'One of the biggest titanosaurs ever found in Brazil.',
  },
  {
    name: 'Medusaceratops',
    description: 'This frilled dinosaur was a close relative of Centrosaurus.',
  },
  {
    name: 'Megalosaurus',
    description: 'The first dinosaur ever to be discovered and named.',
  },
  {
    name: 'Megapnosaurus',
    description: 'Its name is Greek for "big dead lizard".',
  },
  {
    name: 'Megaraptor',
    description: "Despite its name, it wasn't really a raptor.",
  },
  {
    name: 'Mei',
    description: 'The current record-holder for "shortest dinosaur name".',
  },
  {
    name: 'Melanorosaurus',
    description: 'Probably the largest prosauropod that ever lived.',
  },
  {
    name: 'Mendozasaurus',
    description: 'This titanosaur was ancestral to Futalognkosaurus.',
  },
  {
    name: 'Mercuriceratops',
    description: 'This ceratopsian was discovered on the U.S./Canada border.',
  },
  {
    name: 'Metriacanthosaurus',
    description:
      'Yet another dinosaur that was once mistaken for Megalosaurus.',
  },
  {
    name: 'Microceratops',
    description: 'Probably the smallest ceratopsian that ever lived.',
  },
  {
    name: 'Micropachycephalosaurus',
    description: 'The current record-holder for longest dinosaur name.',
  },
  {
    name: 'Microraptor',
    description: 'This tiny feathered dinosaur had four wings rather than two.',
  },
  {
    name: 'Microvenator',
    description:
      'This "tiny hunter" actually measured 10 feet from head to tail.',
  },
  {
    name: 'Minmi',
    description: 'An early (and very dumb) ankylosaur from Australia.',
  },
  {
    name: 'Minotaurasaurus',
    description: 'named after the half-man, half-bull of Greek myth.',
  },
  {
    name: 'Miragaia',
    description: 'This stegosaur had an unusually long neck.',
  },
  {
    name: 'Mirischia',
    description: 'Its name means "wonderful pelvis".',
  },
  {
    name: 'Mochlodon',
    description: 'One of the few dinosaurs ever to be discovered in Austria.',
  },
  {
    name: 'Mojoceratops',
    description: 'This ceratopsian had a heart-shaped frill.',
  },
  {
    name: 'Monkonosaurus',
    description:
      'The first dinosaur ever to be discovered in modern-day Tibet.',
  },
  {
    name: 'Monoclonius',
    description: 'Might this have been a species of Centrosaurus?',
  },
  {
    name: 'Monolophosaurus',
    description: 'This Jurassic predator had a single crest on its skull.',
  },
  {
    name: 'Mononykus',
    description:
      'This dinosaur may have dug into termite mounds for its lunch.',
  },
  {
    name: 'Montanoceratops',
    description: 'A primitive ceratopsian of the late Cretaceous period.',
  },
  {
    name: 'Mussaurus',
    description: 'This "mouse lizard" lived in Triassic South America.',
  },
  {
    name: 'Muttaburrasaurus',
    description: 'The most complete dinosaur fossil ever found in Australia.',
  },
  {
    name: 'Mymoorapelta',
    description: 'named after the Mygand-Moore quarry in Colorado.',
  },
  {
    name: 'Nankangia',
    description: 'A recently discovered oviraptor from China.',
  },
  {
    name: 'Nanosaurus',
    description: 'This "tiny lizard" was named by Othniel C. Marsh.',
  },
  {
    name: 'Nanotyrannus',
    description: 'Could this have been a juvenile T. Rex?',
  },
  {
    name: 'Nanshiungosaurus',
    description: 'A bizarre therizinosaur from Asia.',
  },
  {
    name: 'Nanuqsaurus',
    description: 'This "polar lizard" was recently discovered in Alaska.',
  },
  {
    name: 'Nanyangosaurus',
    description: 'An iguanodontid ornithopod of middle Cretaceous Asia.',
  },
  {
    name: 'Nasutoceratops',
    description: 'This dinosaur had horns like a modern steer.',
  },
  {
    name: 'Nebulasaurus',
    description: 'This "nebula lizard" was recently discovered in China.',
  },
  {
    name: 'Nedcolbertia',
    description: 'named after the famous paleontologist Edwin Colbert.',
  },
  {
    name: 'Neimongosaurus',
    description: 'A rare therizinosaur from inner Mongolia.',
  },
  {
    name: 'Nemegtomaia',
    description: 'This dinosaur had a bizarrely shaped skull.',
  },
  {
    name: 'Nemegtosaurus',
    description:
      'This titanosaur has been recreated from a single, incomplete skull.',
  },
  {
    name: 'Neovenator',
    description: 'One of the largest carnivorous dinosaurs of western Europe.',
  },
  {
    name: 'Neuquenraptor',
    description: 'It may actually be a species (or specimen) of Unenlagia.',
  },
  {
    name: 'Neuquensaurus',
    description: 'Was this titanosaur really a species of Saltasaurus?',
  },
  {
    name: 'Nigersaurus',
    description: 'This African sauropod had a huge number of teeth.',
  },
  {
    name: 'Nipponosaurus',
    description: 'This hadrosaur was discovered on the island of Sakhalin.',
  },
  {
    name: 'Noasaurus',
    description:
      "Were this predator's giant claws on its hands, or on its feet?",
  },
  {
    name: 'Nodocephalosaurus',
    description:
      'This armored dinosaur has been reconstructed from a single skull.',
  },
  {
    name: 'Nodosaurus',
    description:
      'One of the first armored dinosaurs ever discovered in North America.',
  },
  {
    name: 'Nomingia',
    description: 'This small dinosaur had a peacock-like tail.',
  },
  {
    name: 'Nothronychus',
    description: 'The first therizonosaur to be found outside Asia.',
  },
  {
    name: 'Notohypsilophodon',
    description: 'A rare South American ornithopod.',
  },
  {
    name: 'Nqwebasaurus',
    description:
      'One of the few theropods to be discovered in sub-Saharan Africa.',
  },
  {
    name: 'Nuthetes',
    description: 'This raptor was named after the modern monitor lizard.',
  },
  {
    name: 'Nyasasaurus',
    description: 'Could this be the earliest dinosaur in the fossil record?',
  },
  {
    name: 'Ojoceratops',
    description: 'A very close relative of Triceratops.',
  },
  {
    name: 'Olorotitan',
    description:
      'One of the most complete dinosaur fossils ever found in Russia.',
  },
  {
    name: 'Omeisaurus',
    description: 'One of the most common Chinese sauropods.',
  },
  {
    name: 'Oohkotokia',
    description: 'Its name is Blackfoot for "large stone".',
  },
  {
    name: 'Opisthocoelicaudia',
    description: 'A clumsily named titanosaur of the late Cretaceous period.',
  },
  {
    name: 'Orkoraptor',
    description: 'The southernmost theropod ever to live in South America.',
  },
  {
    name: 'Ornithodesmus',
    description: 'This mysterious raptor was once thought to be a pterosaur.',
  },
  {
    name: 'Ornitholestes',
    description: 'This "bird robber" probably preyed on small lizards instead.',
  },
  {
    name: 'Ornithomimus',
    description: 'This "bird mimic" resembled a modern ostrich.',
  },
  {
    name: 'Ornithopsis',
    description: 'This "bird face" was actually a genus of titanosaur.',
  },
  {
    name: 'Orodromeus',
    description: "This tiny herbivore was on Troodon's dinner menu.",
  },
  {
    name: 'Orthomerus',
    description: 'One of the few dinosaurs to be discovered in Holland.',
  },
  {
    name: 'Oryctodromeus',
    description: 'The only ornithopod known to have lived in burrows.',
  },
  {
    name: 'Ostafrikasaurus',
    description: 'Could this have been the earliest known spinosaur?',
  },
  {
    name: 'Othnielia',
    description: 'named after the famous paleontologist Othniel C. Marsh.',
  },
  {
    name: 'Othnielosaurus',
    description: 'Also named after the famous paleontologist Othniel C. Marsh.',
  },
  {
    name: 'Ouranosaurus',
    description:
      "Scientists can't decide if this herbivore had a sail or a hump.",
  },
  {
    name: 'Overosaurus',
    description: 'This dwarf titanosaur was announced to the world in 2013.',
  },
  {
    name: 'Oviraptor',
    description: 'Turns out that this "egg thief" got a bad rap.',
  },
  {
    name: 'Oxalaia',
    description: 'This spinosaur was recently discovered in Brazil.',
  },
  {
    name: 'Ozraptor',
    description: 'Not much is known about this Australian theropod.',
  },
  {
    name: 'Pachycephalosaurus',
    description: 'This plant-eater gave new meaning to the word "blockhead".',
  },
  {
    name: 'Pachyrhinosaurus',
    description: 'This "thick-nosed lizard" roamed the North American forests.',
  },
  {
    name: 'Palaeoscincus',
    description: 'This "ancient skink" was actually an armored dinosaur.',
  },
  {
    name: 'Paluxysaurus',
    description: 'The official Texas state dinosaur.',
  },
  {
    name: 'Pampadromaeus',
    description: 'This "Pampas runner" was ancestral to sauropods.',
  },
  {
    name: 'Pamparaptor',
    description: 'This raptor was discovered in the Argentinian Pampas.',
  },
  {
    name: 'Panamericansaurus',
    description: 'This titanosaur was named after an energy company.',
  },
  {
    name: 'Panoplosaurus',
    description: 'A squat, stocky nodosaur of the late Cretaceous.',
  },
  {
    name: 'Panphagia',
    description: 'Its name is Greek for "eats everything".',
  },
  {
    name: 'Pantydraco',
    description: "No, this dinosaur didn't wear you-know-what.",
  },
  {
    name: 'Paralititan',
    description: 'This huge sauropod was discovered recently in Egypt.',
  },
  {
    name: 'Paranthodon',
    description: 'This stegosaur was discovered over 150 years ago.',
  },
  {
    name: 'Pararhabdodon',
    description: 'The western European equivalent of Tsintaosaurus.',
  },
  {
    name: 'Parasaurolophus',
    description: 'Possibly the loudest dinosaur ever to roam the earth.',
  },
  {
    name: 'Parksosaurus',
    description: 'It was once classified as a species of Thescelosaurus.',
  },
  {
    name: 'Paronychodon',
    description: 'This "tooth taxon" didn\'t make it out of the 19th century.',
  },
  {
    name: 'Parvicursor',
    description: 'One of the smallest dinosaurs yet identified.',
  },
  {
    name: 'Patagosaurus',
    description: 'This "Patagonian lizard" hailed from South America.',
  },
  {
    name: 'Pawpawsaurus',
    description: 'This ancient nodosaur was discovered in Texas.',
  },
  {
    name: 'Pedopenna',
    description: 'One of the earliest known dino-birds.',
  },
  {
    name: 'Pegomastax',
    description: 'This dinosaur was covered with porcupine-like bristles.',
  },
  {
    name: 'Pelecanimimus',
    description: 'This "pelican mimic" sported over 200 teeth.',
  },
  {
    name: 'Peloroplites',
    description: 'This "monstrous Hoplite" was recently discovered in Utah.',
  },
  {
    name: 'Pelorosaurus',
    description: 'The first sauropod ever to be discovered.',
  },
  {
    name: 'Pentaceratops',
    description: 'This "five-horned" herbivore really had only three.',
  },
  {
    name: 'Philovenator',
    description: 'As its name says this dinosaur "loved to hunt".',
  },
  {
    name: 'Phuwiangosaurus',
    description: 'This titanosaur was discovered in modern-day Thailand.',
  },
  {
    name: 'Piatnitzkysaurus',
    description: 'Its teeth were as sharp as its name is funny.',
  },
  {
    name: 'Pinacosaurus',
    description: 'Did this ankylosaur roam central Asia in herds?',
  },
  {
    name: 'Pisanosaurus',
    description: 'One of the earliest known ornithischian dinosaurs.',
  },
  {
    name: 'Piveteausaurus',
    description: 'No one is quite sure what to make of this theropod dinosaur.',
  },
  {
    name: 'Planicoxa',
    description: 'A medium-sized iguanodont of early Cretaceous North America.',
  },
  {
    name: 'Plateosaurus',
    description:
      'This herd dinosaur blackened the plains of the late Triassic.',
  },
  {
    name: 'Pleurocoelus',
    description: 'It was the official state dinosaur of Texas.',
  },
  {
    name: 'Pneumatoraptor',
    description: 'This "air thief" was recently discovered in Hungary.',
  },
  {
    name: 'Podokesaurus',
    description:
      'One of the earliest dinosaurs to live in eastern North America.',
  },
  {
    name: 'Poekilopleuron',
    description: 'It may (or may not) have been a species of Megalosaurus.',
  },
  {
    name: 'Polacanthus',
    description: 'An extremely spiky ankylosaur of the middle Cretaceous.',
  },
  {
    name: 'Prenocephale',
    description: 'This "bonehead" had a round, thick skull.',
  },
  {
    name: 'Prenoceratops',
    description: 'A close relative of Leptoceratops.',
  },
  {
    name: 'Proa',
    description: 'This ornithopod was named after its prow-shaped jaw.',
  },
  {
    name: 'Probactrosaurus',
    description: 'An early stage in hadrosaur evolution.',
  },
  {
    name: 'Proceratosaurus',
    description: 'Despite its name, not a close relative of Ceratosaurus.',
  },
  {
    name: 'Procompsognathus',
    description: 'Was it an archosaur or an early dinosaur?',
  },
  {
    name: 'Propanoplosaurus',
    description: 'This baby ankylosaur was recently discovered in Maryland.',
  },
  {
    name: 'Prosaurolophus',
    description: 'The likely ancestor of both Saurolophus and Parasaurolophus.',
  },
  {
    name: 'Protarchaeopteryx',
    description:
      'Before Archaeopteryx? It actually lived millions of years later.',
  },
  {
    name: 'Protoceratops',
    description: 'A famous dinosaur with a very funky frill.',
  },
  {
    name: 'Protohadros',
    description: 'Despite its name, it wasn\'t really the "first" hadrosaur.',
  },
  {
    name: 'Psittacosaurus',
    description:
      "This dinosaur's noggin wouldn't have looked out of place on a parrot.",
  },
  {
    name: 'Puertasaurus',
    description: 'This titanosaur rivaled Argentinosaurus in size.',
  },
  {
    name: 'Pyroraptor',
    description: 'This "fire thief" prowled the plains of prehistoric France.',
  },
  {
    name: 'Qantassaurus',
    description: 'named after the national airline of Australia.',
  },
  {
    name: 'Qianzhousaurus',
    description:
      'This long-snouted tyrannosaur has been nicknamed Pinocchio Rex.',
  },
  {
    name: 'Qiaowanlong',
    description: 'An Asian relative of Brachiosaurus.',
  },
  {
    name: 'Qiupalong',
    description: 'This "bird mimic" dinosaur was recently discovered in China.',
  },
  {
    name: 'Quaesitosaurus',
    description: 'This titanosaur may have had remarkably sharp hearing.',
  },
  {
    name: 'Quilmesaurus',
    description:
      'This dinosaur was named after an indigenous South American tribe.',
  },
  {
    name: 'Rahiolisaurus',
    description:
      'This Indian dinosaur is represented by seven tangled individuals.',
  },
  {
    name: 'Rahonavis',
    description: 'Was it a raptor-like bird or a bird-like raptor?',
  },
  {
    name: 'Rajasaurus',
    description: 'This "prince lizard" lived in what is now modern-day India.',
  },
  {
    name: 'Rapator',
    description: "No, this mysterious Australian theropod wasn't a raptor.",
  },
  {
    name: 'Rapetosaurus',
    description:
      'The only sauropod ever to be discovered on modern-day Madagascar.',
  },
  {
    name: 'Raptorex',
    description: 'A pint-sized precursor of T. Rex.',
  },
  {
    name: 'Rebbachisaurus',
    description: 'A poorly understood sauropod from northern Africa.',
  },
  {
    name: 'Regaliceratops',
    description: 'This ceratopsian had a huge, crown-shaped frill.',
  },
  {
    name: 'Regnosaurus',
    description: 'This stegosaur lived in what is now modern-day England.',
  },
  {
    name: 'Rhabdodon',
    description:
      'A possible "missing link" between Iguanodon and Hypsilophodon.',
  },
  {
    name: 'Rhinorex',
    description: 'This duck-billed dinosaur had an unusually large nose.',
  },
  {
    name: 'Rhoetosaurus',
    description: 'A medium-sized sauropod from Down Under.',
  },
  {
    name: 'Richardoestesia',
    description: 'named after the paleontologist Richard Estes.',
  },
  {
    name: 'Rinchenia',
    description: 'named after the famous paleontologist Rinchen Barsbold.',
  },
  {
    name: 'Rinconsaurus',
    description: 'A modestly sized titanosaur of South America.',
  },
  {
    name: 'Riojasaurus',
    description:
      'One of the few prosauropods known to have lived in South America.',
  },
  {
    name: 'Rubeosaurus',
    description: 'A ceratopsian dinosaur from the Two Medicine Formation.',
  },
  {
    name: 'Rugops',
    description:
      'This wrinkly-faced carnivore probably fed on abandoned carcasses.',
  },
  {
    name: 'Sahaliyania',
    description: 'This hadrosaur\'s name is Manchurian for "black".',
  },
  {
    name: 'Saichania',
    description: 'This ankylosaur\'s name is Chinese for "beautiful".',
  },
  {
    name: 'Saltasaurus',
    description: 'The first armored sauropod ever to be discovered.',
  },
  {
    name: 'Saltopus',
    description: "Experts aren't sure if this was a dinosaur or an archosaur.",
  },
  {
    name: 'Sanjuansaurus',
    description: 'An early theropod from South America.',
  },
  {
    name: 'Santanaraptor',
    description: "named after Brazil's Santana formation.",
  },
  {
    name: 'Sarahsaurus',
    description: 'This prosauropod had unusually strong hands.',
  },
  {
    name: 'Sarcolestes',
    description: 'The most likely ancestor of the ankylosaurs.',
  },
  {
    name: 'Sarcosaurus',
    description: 'This "flesh lizard" roamed early Jurassic England.',
  },
  {
    name: 'Saturnalia',
    description: 'The earliest dinosaur known to have had a herbivorous diet.',
  },
  {
    name: 'Saurolophus',
    description:
      'One of the few hadrosaurs known to have lived on two continents.',
  },
  {
    name: 'Sauroniops',
    description: 'This dinosaur\'s name means "Eye of Sauron".',
  },
  {
    name: 'Sauropelta',
    description: "This ankylosaur's armor helped keep raptors at bay.",
  },
  {
    name: 'Saurophaganax',
    description: 'The official state dinosaur of Oklahoma.',
  },
  {
    name: 'Sauroposeidon',
    description: 'One of the tallest dinosaurs ever to walk the earth.',
  },
  {
    name: 'Saurornithoides',
    description: 'A Troodon-like predator from central Asia.',
  },
  {
    name: 'Saurornitholestes',
    description: 'A close cousin of Velociraptor.',
  },
  {
    name: 'Savannasaurus',
    description: 'This titanosaur was recently discovered in Australia.',
  },
  {
    name: 'Scansoriopteryx',
    description: 'This early proto-bird probably lived in trees.',
  },
  {
    name: 'Scelidosaurus',
    description: 'Among the earliest of all the armored dinosaurs.',
  },
  {
    name: 'Scipionyx',
    description:
      'One of the most perfectly preserved dinosaur fossils ever found.',
  },
  {
    name: 'Sciurumimus',
    description:
      'This "squirrel mimic" was one of the earliest feathered dinosaurs.',
  },
  {
    name: 'Scolosaurus',
    description: 'It was once classified as a species of Euoplocephalus.',
  },
  {
    name: 'Scutellosaurus',
    description: 'Probably the smallest of all the armored dinosaurs.',
  },
  {
    name: 'Secernosaurus',
    description: 'The first hadrosaur to be discovered in South America.',
  },
  {
    name: 'Seitaad',
    description: 'This small dinosaur may have been buried in an avalanche.',
  },
  {
    name: 'Segisaurus',
    description: 'An early dinosaur closely related to Coelophysis.',
  },
  {
    name: 'Segnosaurus',
    description:
      'One of the most unusual (and poorly understood) Cretaceous dinosaurs.',
  },
  {
    name: 'Seismosaurus',
    description:
      'It was huge, to be sure, but might it have been a species of Diplodocus?',
  },
  {
    name: 'Sellosaurus',
    description: 'Another early prosauropod of the Triassic period.',
  },
  {
    name: 'Serendipaceratops',
    description: 'Was this really an Australian ceratopsian?',
  },
  {
    name: 'Shamosaurus',
    description:
      'This Mongolian ankylosaur was a close relative of Gobisaurus.',
  },
  {
    name: 'Shanag',
    description: 'A basal raptor of early Cretaceous Asia.',
  },
  {
    name: 'Shantungosaurus',
    description: 'The biggest of all the duck-billed dinosaurs.',
  },
  {
    name: 'Shaochilong',
    description: 'Its name is Chinese for "shark-toothed dragon".',
  },
  {
    name: 'Shenzhousaurus',
    description: 'A small, primitive ornithomimid from China.',
  },
  {
    name: 'Shunosaurus',
    description:
      'Anatomically speaking, probably the best known of all the sauropods.',
  },
  {
    name: 'Shuvosaurus',
    description:
      'Was this meat eater an early dinosaur or a two-legged crocodile?',
  },
  {
    name: 'Shuvuuia',
    description: "Scientists can't decide if it was a dinosaur or a bird.",
  },
  {
    name: 'Siamodon',
    description: 'This ornithopod was recently discovered in Thailand.',
  },
  {
    name: 'Siamosaurus',
    description: 'This may (or may not) have been a spinosaur from Thailand.',
  },
  {
    name: 'Siamotyrannus',
    description: "Despite its name, it wasn't a true tyrannosaur.",
  },
  {
    name: 'Siats',
    description: 'One of the largest theropods ever to live in North America.',
  },
  {
    name: 'Sigilmassasaurus',
    description: 'Was this really a species of Carcharodontosaurus?',
  },
  {
    name: 'Silvisaurus',
    description: 'This primitive nodosaur was discovered in Kansas.',
  },
  {
    name: 'Similicaudipteryx',
    description:
      'The juveniles may have been differently feathered than the adults.',
  },
  {
    name: 'Sinocalliopteryx',
    description: 'The biggest "dino-bird" yet discovered.',
  },
  {
    name: 'Sinoceratops',
    description: 'A rare ceratopsian from late Cretaceous China.',
  },
  {
    name: 'Sinornithoides',
    description: 'A small, feathered dinosaur closely related to Troodon.',
  },
  {
    name: 'Sinornithomimus',
    description: 'This ornithomimid is known from over a dozen skeletons.',
  },
  {
    name: 'Sinornithosaurus',
    description: 'A typical dino-bird of the early Cretaceous.',
  },
  {
    name: 'Sinosauropteryx',
    description: 'The first dinosaur proven to have feathers.',
  },
  {
    name: 'Sinosaurus',
    description: 'It was once classified as an Asian species of Dilophosaurus.',
  },
  {
    name: 'Sinotyrannus',
    description:
      'This "Chinese tyrant" was an ancient ancestor of tyrannosaurs.',
  },
  {
    name: 'Sinovenator',
    description: 'This "Chinese hunter" preyed on its fellow dino-birds.',
  },
  {
    name: 'Sinraptor',
    description:
      "Despite its name, this allosaur wasn't any better or worse than other dinosaurs.",
  },
  {
    name: 'Sinusonasus',
    description:
      'It sounds like a disease, but it was actually a feathered dinosaur.',
  },
  {
    name: 'Skorpiovenator',
    description: 'This "scorpion hunter" really ate meat.',
  },
  {
    name: 'Sonorasaurus',
    description: 'The remains of this sauropod were discovered in Arizona.',
  },
  {
    name: 'Sphaerotholus',
    description: 'Yet another dome-headed dino from North America.',
  },
  {
    name: 'Spinophorosaurus',
    description: 'This early sauropod had a "thagomizer" on its tail.',
  },
  {
    name: 'Spinops',
    description:
      'This ceratopsian was named 100 years after its bones were found.',
  },
  {
    name: 'Spinosaurus',
    description:
      'This dinosaur was distinguished by the sail-like structure on its back.',
  },
  {
    name: 'Spinostropheus',
    description:
      'This theropod was once thought to be a species of Elaphrosaurus.',
  },
  {
    name: 'Staurikosaurus',
    description: 'Another primitive theropod of the Triassic period.',
  },
  {
    name: 'Stegoceras',
    description: 'This small herbivore was built for high-speed head-butting.',
  },
  {
    name: 'Stegosaurus',
    description: 'The small-brained, spike-tailed, plant-eating dinosaur.',
  },
  {
    name: 'Stenopelix',
    description: "Experts aren't sure how to classify this dinosaur.",
  },
  {
    name: 'Stokesosaurus',
    description: 'Some experts think this was the earliest tyrannosaur.',
  },
  {
    name: 'Struthiomimus',
    description: 'This "ostrich mimic" roamed the plains of North America.',
  },
  {
    name: 'Struthiosaurus',
    description: 'The smallest nodosaur yet discovered.',
  },
  {
    name: 'Stygimoloch',
    description:
      'Its name means "demon from the river of death." Got your attention yet?',
  },
  {
    name: 'Styracosaurus',
    description: 'Winner of the "most elaborate head display" competition.',
  },
  {
    name: 'Suchomimus',
    description: 'A fish-eating dinosaur with a distinct crocodilian profile.',
  },
  {
    name: 'Sulaimanisaurus',
    description: 'One of the few dinosaurs ever to be discovered in Pakistan.',
  },
  {
    name: 'Supersaurus',
    description:
      "No, it didn't wear a cape, but this giant dino was still impressive.",
  },
  {
    name: 'Suuwassea',
    description: 'Its name is Native American for "ancient thunder".',
  },
  {
    name: 'Suzhousaurus',
    description: 'A large, early Cretaceous therizinosaur.',
  },
  {
    name: 'Szechuanosaurus',
    description: 'This theropod was a close relative of Sinraptor.',
  },
  {
    name: 'Tachiraptor',
    description:
      'The first meat-eating dinosaur ever to be discovered in Venezuela.',
  },
  {
    name: 'Talarurus',
    description: 'This ankylosaur was discovered in the Gobi Desert.',
  },
  {
    name: 'Talos',
    description: 'This dinosaur was found with an injured big toe.',
  },
  {
    name: 'Tangvayosaurus',
    description:
      'This Laotian titanosaur was closely related to Phuwiangosaurus.',
  },
  {
    name: 'Tanius',
    description: 'Not much is known about this Chinese hadrosaur.',
  },
  {
    name: 'Tanycolagreus',
    description:
      'This mysterious theropod was once thought to be a species of Coelurus.',
  },
  {
    name: 'Taohelong',
    description:
      'The first "polacanthine" ankylosaur ever to be discovered in Asia.',
  },
  {
    name: 'Tapuiasaurus',
    description: 'A recently discovered titanosaur from South America.',
  },
  {
    name: 'Tarascosaurus',
    description: 'The only known abelisaur of the northern hemisphere.',
  },
  {
    name: 'Tarbosaurus',
    description: 'The second-biggest tyrannosaur after T. Rex.',
  },
  {
    name: 'Tarchia',
    description: 'Its name means "brainy," but that may be an exaggeration.',
  },
  {
    name: 'Tastavinsaurus',
    description: 'This titanosaur was discovered in Spain.',
  },
  {
    name: 'Tatankacephalus',
    description: 'A brand-new ankylosaur from North America.',
  },
  {
    name: 'Tatankaceratops',
    description: 'Was this really a juvenile specimen of Triceratops?',
  },
  {
    name: 'Tataouinea',
    description: "No, this dinosaur wasn't named after Tatooine in Star Wars.",
  },
  {
    name: 'Tawa',
    description:
      'This ancient theropod points to a South American origin for dinosaurs.',
  },
  {
    name: 'Tazoudasaurus',
    description: 'This Vulcanodon relative was one of the earliest sauropods.',
  },
  {
    name: 'Technosaurus',
    description: 'This early herbivore was named after Texas Tech university.',
  },
  {
    name: 'Tehuelchesaurus',
    description:
      'This sauropod was named after an indigenous South American people.',
  },
  {
    name: 'Telmatosaurus',
    description: 'This duck-billed dinosaur was discovered in Transylvania.',
  },
  {
    name: 'Tendaguria',
    description: 'This Tanzanian sauropod has proven difficult to classify.',
  },
  {
    name: 'Tenontosaurus',
    description: 'This long-tailed herbivore was hunted by Deinonychus.',
  },
  {
    name: 'Teratophoneus',
    description: 'This "monstrous murderer" wasn\'t all that big.',
  },
  {
    name: 'Tethyshadros',
    description: 'One of the few dinosaurs to be found in modern-day Italy.',
  },
  {
    name: 'Texacephale',
    description: 'This Texan pachycephalosaur was named in 2010.',
  },
  {
    name: 'Thecocoelurus',
    description: 'Is this the earliest ornithomimid in the fossil record?',
  },
  {
    name: 'Thecodontosaurus',
    description: 'The first prosauropod ever to be discovered.',
  },
  {
    name: 'Theiophytalia',
    description: 'Its name means "garden of the gods".',
  },
  {
    name: 'Therizinosaurus',
    description:
      'What did Little Orphan Annie say to this dinosaur? "Reaping lizards!"',
  },
  {
    name: 'Thescelosaurus',
    description: "Did paleontologists find this dinosaur's mummified heart?",
  },
  {
    name: 'Tianchisaurus',
    description: 'This dinosaur\'s species name honors "Jurassic Park".',
  },
  {
    name: 'Tianyulong',
    description: 'Why did this ornithopod have feathers?',
  },
  {
    name: 'Tianyuraptor',
    description: 'A small, long-legged raptor from eastern Asia.',
  },
  {
    name: 'Tianzhenosaurus',
    description: "This ankylosaur's skull has been spectacularly preserved.",
  },
  {
    name: 'Timimus',
    description: 'The only ornithomimid ever discovered in Australia.',
  },
  {
    name: 'Titanoceratops',
    description: 'The biggest of all the horned, frilled dinosaurs.',
  },
  {
    name: 'Titanosaurus',
    description:
      'This sauropod may—or may not—have been a unique member of its genus.',
  },
  {
    name: 'Tochisaurus',
    description: 'A large troodont of late Cretaceous Asia.',
  },
  {
    name: 'Tornieria',
    description: 'This sauropod has a complicated taxonomic history.',
  },
  {
    name: 'Torosaurus',
    description: 'Was it really an elderly specimen of Triceratops?',
  },
  {
    name: 'Torvosaurus',
    description: 'One of the largest predators of Jurassic North America.',
  },
  {
    name: 'Triceratops',
    description: 'The famous, three-horned, plant-eating dinosaur.',
  },
  {
    name: 'Trinisaura',
    description: 'The first ornithopod ever to be discovered in Antarctica.',
  },
  {
    name: 'Troodon',
    description: 'Possibly the smartest dinosaur that ever lived.',
  },
  {
    name: 'Tsaagan',
    description: 'One of the earliest raptors yet discovered.',
  },
  {
    name: 'Tsintaosaurus',
    description: 'Also known as the "Unicorn Dinosaur".',
  },
  {
    name: 'Tuojiangosaurus',
    description: 'One of the most well-known Chinese stegosaurs.',
  },
  {
    name: 'Turanoceratops',
    description: 'What was this ceratopsian doing in late Cretaceous Asia?',
  },
  {
    name: 'Turiasaurus',
    description: 'The largest dinosaur ever to be discovered in Europe.',
  },
  {
    name: 'Tylocephale',
    description: 'The tallest-domed of all the pachycephalosaurs.',
  },
  {
    name: 'Tyrannosaurus Rex',
    description: 'The once—and always—king of the dinosaurs.',
  },
  {
    name: 'Tyrannotitan',
    description: 'We know very little about this fearsomely named dinosaur.',
  },
  {
    name: 'Uberabatitan',
    description: 'Discovered in the Uberaba region of Brazil.',
  },
  {
    name: 'Udanoceratops',
    description: 'The largest ceratopsian to run on two legs.',
  },
  {
    name: 'Unaysaurus',
    description: 'One of the oldest prosauropods yet discovered.',
  },
  {
    name: 'Unenlagia',
    description: 'This bird-like raptor was native to South America.',
  },
  {
    name: 'Unescoceratops',
    description: "named after the United Nation's UNESCO.",
  },
  {
    name: 'Urbacodon',
    description: 'This Troodon-like predator was discovered in Uzbekistan.',
  },
  {
    name: 'Utahceratops',
    description: 'Guess what state this dinosaur was discovered in.',
  },
  {
    name: 'Utahraptor',
    description: 'Probably the biggest raptor that ever lived.',
  },
  {
    name: 'Uteodon',
    description: 'It was once classified as a species of Camptosaurus.',
  },
  {
    name: 'Vagaceratops',
    description:
      'This big-frilled dinosaur was closely related to Kosmoceratops.',
  },
  {
    name: 'Vahiny',
    description: 'Its name is Malagasy for "traveler".',
  },
  {
    name: 'Valdoraptor',
    description: 'This early "bird mimic" dinosaur lived in England.',
  },
  {
    name: 'Valdosaurus',
    description: 'This ornithopod was discovered on the Isle of Wight.',
  },
  {
    name: 'Variraptor',
    description: 'The first raptor ever to be discovered in France.',
  },
  {
    name: 'Velafrons',
    description: 'A new addition to the duck-billed dinosaur family.',
  },
  {
    name: 'Velociraptor',
    description:
      'This dinosaur was vicious but a lot smaller than you thought.',
  },
  {
    name: 'Velocisaurus',
    description: 'A small, speedy theropod of late Cretaceous South America.',
  },
  {
    name: 'Venenosaurus',
    description: 'This "poison lizard" was really a gentle plant-eater.',
  },
  {
    name: 'Veterupristisaurus',
    description: 'One of the earliest carcharodontosaurs yet identified.',
  },
  {
    name: 'Vulcanodon',
    description: 'An early sauropod of the Jurassic period.',
  },
  {
    name: 'Wannanosaurus',
    description: 'Probably the smallest of all the bone-headed dinosaurs.',
  },
  {
    name: 'Wellnhoferia',
    description: 'Was it really a species of Archaeopteryx?',
  },
  {
    name: 'Wendiceratops',
    description: 'This dinosaur honors Canadian fossil hunter Wendy Sloboda.',
  },
  {
    name: 'Willinakaqe',
    description: 'A rare duck-billed dinosaur from South America.',
  },
  {
    name: 'Wintonotitan',
    description: 'Another new titanosaur from Australia.',
  },
  {
    name: 'Wuerhosaurus',
    description: 'Could this have been the last of the stegosaurs?',
  },
  {
    name: 'Wulagasaurus',
    description: 'The earliest saurolophine hadrosaur in the fossil record.',
  },
  {
    name: 'Xenoceratops',
    description: 'This "alien horned face" was announced in 2012.',
  },
  {
    name: 'Xenoposeidon',
    description: "Experts aren't sure how to classify this sauropod.",
  },
  {
    name: 'Xenotarsosaurus',
    description: 'A poorly understood abelisaur from South America.',
  },
  {
    name: 'Xiaosaurus',
    description: 'A small ornithopod from late Jurassic Asia.',
  },
  {
    name: 'Xiaotingia',
    description: 'This feathered dinosaur predated Archaeopteryx.',
  },
  {
    name: 'Xinjiangtitan',
    description: 'This huge sauropod was a close relative of Mamenchisaurus.',
  },
  {
    name: 'Xiongguanlong',
    description: 'A small, primitive tyrannosaur from Asia.',
  },
  {
    name: 'Xixianykus',
    description: 'A long-legged dino-bird from eastern Asia.',
  },
  {
    name: 'Xuanhanosaurus',
    description:
      "You didn't think there'd be so many \"X\"'s on this list, did you?",
  },
  {
    name: 'Xuanhuaceratops',
    description: 'An early ceratopsian of the late Jurassic.',
  },
  {
    name: 'Xuwulong',
    description:
      'This iguanodontid ornithopod was recently discovered in China.',
  },
  {
    name: 'Yamaceratops',
    description: "No, it didn't have a sweet potato for a head.",
  },
  {
    name: 'Yandusaurus',
    description: 'A small ornithopod of middle Jurassic China.',
  },
  {
    name: 'Yangchuanosaurus',
    description: 'A large theropod of late Jurassic Asia.',
  },
  {
    name: 'Yaverlandia',
    description: 'A classic case of mistaken dinosaur identity.',
  },
  {
    name: 'Yi Qi',
    description: 'This strange Jurassic dinosaur had bat-like wings.',
  },
  {
    name: 'Yimenosaurus',
    description: 'One of the better-known Chinese prosauropods.',
  },
  {
    name: 'Yinlong',
    description: 'This "hidden dragon" was an early ceratopsian.',
  },
  {
    name: 'Yixianosaurus',
    description: 'How did this dino-bird use its long fingers?',
  },
  {
    name: 'Yizhousaurus',
    description: 'The earliest intact sauropod yet discovered.',
  },
  {
    name: 'Yongjinglong',
    description: 'This titanosaur was recently discovered in China.',
  },
  {
    name: 'Yueosaurus',
    description:
      'This basal ornithopod was discovered by construction workers.',
  },
  {
    name: 'Yulong',
    description: 'The smallest oviraptor yet identified.',
  },
  {
    name: 'Yunnanosaurus',
    description: 'One of the last prosauropods to walk the earth.',
  },
  {
    name: 'Yutyrannus',
    description: 'The largest feathered tyrannosaur yet identified.',
  },
  {
    name: 'Zalmoxes',
    description: 'A strange-looking ornithopod from Romania.',
  },
  {
    name: 'Zanabazar',
    description: 'named after a Buddhist spiritual leader.',
  },
  {
    name: 'Zapalasaurus',
    description:
      'This "diplodocoid" sauropod lived in early Cretaceous South America.',
  },
  {
    name: 'Zby',
    description: "This dinosaur's name was inversely proportional to its size.",
  },
  {
    name: 'Zephyrosaurus',
    description: 'Otherwise known as the Western Wind Lizard.',
  },
  {
    name: 'Zhanghenglong',
    description: 'A transitional hadrosaur of late Cretaceous Asia.',
  },
  {
    name: 'Zhejiangosaurus',
    description: 'The first identified nodosaur from Asia.',
  },
  {
    name: 'Zhenyuanlong',
    description: 'Also known as the "fluffy feathered poodle from hell".',
  },
  {
    name: 'Zhongyuansaurus',
    description: 'The only known ankylosaur to lack a tail club.',
  },
  {
    name: 'Zhuchengceratops',
    description: 'It probably figured on the lunch menu of Zhuchengtyrannus.',
  },
  {
    name: 'Zhuchengosaurus',
    description: 'This hadrosaur was even bigger than Shantungosaurus.',
  },
  {
    name: 'Zhuchengtyrannus',
    description: 'This Asian tyrannosaur was the size of T. Rex.',
  },
  {
    name: 'Zuniceratops',
    description:
      'This horned dinosaur was discovered by an eight-year-old boy.',
  },
  {
    name: 'Zuolong',
    description: 'It was named after General Tso, of Chinese restaurant fame.',
  },
  {
    name: 'Zupaysaurus',
    description: 'This "devil lizard" was one of the earliest theropods.',
  },
];
