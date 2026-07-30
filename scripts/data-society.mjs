import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "charlotte-symphony-gala-season-patrons",
    title: "The Gala Season That Sustains Carolina Culture",
    excerpt:
      "Behind the gowns and the auction paddles lies a serious civic engine. Inside the philanthropic circuit that keeps the state's cultural institutions alive.",
    date: "2026-07-19",
    credit: "Vivienne Ashford",
    body: `The Carolina gala season looks, from the outside, like pure spectacle — the gowns, the ballrooms, the champagne. Beneath the glamour lies something more consequential.

## Philanthropy in formal wear

The galas that fill the social calendar are, in fact, the financial backbone of the state's cultural life. Symphonies, museums and theaters depend on the money raised across a season of black-tie evenings, and the patrons who attend understand their role.

An auction paddle raised at the right moment can fund an entire program.

> "People think it's a party," one veteran organizer said. "It's a budget."

## The social contract

The circuit binds the state's affluent to its institutions, turning private wealth into public culture. Attendance is as much duty as pleasure.

For all the finery, the gala season is a serious civic mechanism — the means by which a community of patrons quietly sustains the cultural institutions that give the state its character.`,
  },
  {
    slug: "carolina-contemporary-art-museum-expansion",
    title: "A Bold Expansion Signals Carolina's Contemporary-Art Ambitions",
    excerpt:
      "With a major new wing and an aggressive acquisition strategy, one of the state's leading museums is staking a claim to national relevance.",
    date: "2026-07-01",
    credit: "Dashiell Monroe",
    body: `The Carolinas have long imported their contemporary art from elsewhere. One ambitious museum intends to change that.

## Building for relevance

A major new wing and an aggressive acquisition program signal the institution's determination to compete on a national stage. The expansion adds gallery space, but more tellingly, it announces intent — a refusal to remain a regional afterthought.

The collection has grown bolder, embracing challenging contemporary work.

## Culture as strategy

The ambition is civic as well as artistic. A serious contemporary museum attracts talent, tourism and prestige, and the state's leaders increasingly grasp the connection.

Skeptics question whether the region can sustain such aspirations. The museum's leadership is undeterred, betting that if you build a genuinely important institution, the audience and the reputation will follow. The Carolinas, they insist, are ready.`,
  },
  {
    slug: "asheville-literary-festival-southern-letters",
    title: "The Festival Putting Southern Letters Center Stage",
    excerpt:
      "Each autumn, a mountain literary festival draws celebrated writers and devoted readers, affirming the enduring vitality of the Southern literary tradition.",
    date: "2026-06-15",
    credit: "Cordelia Vance",
    body: `The South has always produced great writers. A mountain festival each autumn gathers them, and their readers, in celebration.

## A gathering of writers

The literary festival draws celebrated authors and passionate readers to the mountains for days of readings, conversations and debate. It has become a fixture of the region's cultural calendar and a point of pride.

The programming honors the deep Southern literary tradition while championing new voices.

## Letters as community

What distinguishes the festival is its intimacy. Readers meet writers; conversations spill from the venues into the cafés and streets.

The event affirms that literature remains a living, communal art in the South, not a museum piece. In an age of distraction, the festival's crowds are a heartening reminder that the written word still gathers people — and that Southern letters remain vital.`,
  },
  {
    slug: "carolina-jazz-heritage-music-legacy",
    title: "Honoring the Carolina Roots of American Jazz",
    excerpt:
      "The state produced giants of the genre, and a renewed effort is underway to celebrate that heritage through festivals, education and preservation.",
    date: "2026-05-27",
    credit: "Julius Hampton",
    body: `America's jazz story runs through the Carolinas more than most people realize, and a renewed effort aims to give that legacy its due.

## A birthplace of genius

The state produced towering figures in the music's history, artists whose innovations shaped the genre. That heritage has often gone under-celebrated at home.

Festivals, educational programs and preservation efforts are working to change that, honoring the musicians and the communities that nurtured them.

## Preserving the sound

The work is partly historical — documenting stories before they are lost — and partly living, supporting the musicians carrying the tradition forward.

The revival reflects a broader recognition that the Carolinas' cultural contributions extend far beyond what the textbooks record. In reclaiming its jazz heritage, the state reclaims a piece of its identity, and of America's, one performance at a time.`,
  },
  {
    slug: "carolina-opera-company-renaissance",
    title: "The Small Opera Company Punching Far Above Its Weight",
    excerpt:
      "Through inventive staging and a commitment to accessibility, a Carolina opera company is drawing new audiences to an art form often declared dead.",
    date: "2026-05-13",
    credit: "Isadora Belmonte",
    body: `Opera is perpetually declared dying. One Carolina company keeps failing to get the memo.

## Reinventing the form

Through inventive staging, ambitious programming and a determination to reach beyond the traditional audience, the company has built a genuine following. It stages the classics with fresh eyes and champions new work, refusing to treat opera as a relic.

The productions are lavish where it counts and daring where it dares.

## Opening the doors

Crucially, the company has worked to make opera accessible — through pricing, education and community engagement — drawing audiences that the art form is often accused of excluding.

The results defy the doom-laden narrative. In a mid-sized Carolina market, a serious opera company is not merely surviving but thriving, proof that the art form's supposed death has been greatly exaggerated.`,
  },
  {
    slug: "carolina-craft-folk-art-tradition",
    title: "The Keepers of Carolina Folk Art",
    excerpt:
      "From face jugs to quilts, the state's folk-art traditions endure in the hands of makers determined to pass them on.",
    date: "2026-04-24",
    credit: "Tabitha Rowe",
    body: `Carolina folk art is not a museum category. It is a living tradition, still practiced in the hands that inherited it.

## Craft as inheritance

From the distinctive face jugs of the Piedmont potters to the quilts of the mountains, the state's folk-art traditions survive through makers who learned them from their elders. The work is functional and expressive at once, rooted in generations of practice.

These are not hobbyists but heirs, custodians of techniques refined over centuries.

## Passing it on

The great anxiety is continuity — ensuring the knowledge survives the generation that holds it. Apprenticeships, guilds and folk schools work to transmit the skills.

The stakes are cultural. Folk art encodes a community's history and values in physical form. In keeping the traditions alive, the makers preserve not just objects but a way of seeing the world, handed down and made new.`,
  },
  {
    slug: "durham-black-cultural-institutions-legacy",
    title: "Durham's Black Cultural Institutions Write Their Next Chapter",
    excerpt:
      "Building on a proud and painful history, the city's Black cultural organizations are securing their legacy for a new generation.",
    date: "2026-04-06",
    credit: "Amara Coleman",
    body: `Durham's Black cultural institutions carry a history as rich as any in the South, and they are determined that it endure.

## A proud legacy

Rooted in the community that once made the city a center of Black enterprise and culture, these institutions — theaters, archives, arts organizations — preserve and celebrate a heritage of achievement against the odds.

Their history is both proud and painful, and they hold both truths.

## Securing the future

The current work is about permanence: building endowments, restoring buildings, engaging young people who will carry the institutions forward.

The effort reflects a determination not to let hard-won cultural achievements fade. In securing their institutions, the city's cultural leaders ensure that Durham's remarkable story continues to be told — by the community that lived it, on its own terms, for generations to come.`,
  },
  {
    slug: "carolina-film-festival-independent-cinema",
    title: "The Film Festival Championing Independent Southern Cinema",
    excerpt:
      "A growing festival has become an essential showcase for independent filmmakers telling Southern stories on their own terms.",
    date: "2026-03-20",
    credit: "Rafael Ortega",
    body: `Southern stories have too often been told by outsiders. A growing Carolina film festival is helping change who holds the camera.

## A showcase for the South

The festival has become an essential platform for independent filmmakers, with a particular commitment to Southern voices and stories. It screens the films the mainstream overlooks, and connects the artists who make them.

For emerging filmmakers, a slot in the program can be career-defining.

## Stories on their own terms

The emphasis is on authenticity — narratives that reflect the complexity of the region rather than its caricatures.

The festival's growth mirrors a broader flourishing of Southern independent film, as the tools of production democratize and regional talent finds its audience. In championing these films, the festival helps ensure the South's stories are told, at last, by the people who know them best.`,
  },
  {
    slug: "carolina-botanical-garden-philanthropy",
    title: "The Philanthropists Cultivating Carolina's Great Gardens",
    excerpt:
      "Behind the state's celebrated botanical gardens stands a network of donors who see horticulture as a public good worth sustaining.",
    date: "2026-03-01",
    credit: "Genevieve Ashby",
    body: `The Carolinas' great public gardens do not sustain themselves. Behind them stands a quiet network of philanthropists who regard horticulture as a civic cause.

## Beauty as public good

The state's celebrated botanical gardens depend on donors who fund their collections, conservation work and public programs. These patrons see the gardens as a public good — places of beauty, education and refuge open to all.

Their giving supports everything from rare-plant conservation to children's programming.

## A living philanthropy

Unlike a building or an endowment, a garden is alive, requiring perpetual care. The philanthropy that sustains it must be equally ongoing.

The donors understand this, committing to institutions whose work is never finished. In cultivating the gardens, they cultivate something larger — a shared public inheritance of beauty and knowledge, tended across generations for the benefit of everyone who walks through the gates.`,
  },
  {
    slug: "carolina-debutante-tradition-modern-society",
    title: "The Debutante Tradition Adapts to a New Carolina",
    excerpt:
      "Once a rigid rite of Southern high society, the debutante season is quietly evolving, balancing heritage with the values of a changing generation.",
    date: "2026-02-14",
    credit: "Prudence Callaway",
    body: `Few traditions carry as much freight as the Southern debutante season. In the Carolinas, it is quietly being remade.

## Heritage under review

Long a rigid rite of high society, the debutante tradition persists in the state's established circles — but it is evolving. A new generation participates on its own terms, retaining the pageantry while questioning the exclusions of the past.

Many debutante organizations now emphasize charity and community service over mere presentation.

## Continuity and change

The tension is generational. Elders cherish the tradition's continuity; the young insist it reflect contemporary values.

The result is a custom in transition — neither abandoned nor unchanged. Whether it endures depends on its capacity to adapt, and the current generation seems determined to preserve what it values while shedding what it cannot defend. The season, for now, goes on.`,
  },
  {
    slug: "carolina-wine-society-collectors-cellars",
    title: "Inside the Carolina Wine Society's Rarefied World",
    excerpt:
      "A community of serious collectors and connoisseurs has built a sophisticated wine culture in the state, complete with cellars to rival any in the country.",
    date: "2026-01-29",
    credit: "Lorenzo Ferretti",
    body: `The Carolinas may not be famous for wine, but they harbor some of the country's most serious collectors.

## A connoisseur's community

A network of dedicated oenophiles has built a sophisticated wine culture in the state — trading bottles, hosting tastings and assembling cellars of genuine distinction. Their knowledge rivals that of collectors in any major market.

The community is close-knit, bound by a shared passion and the pleasures of the shared table.

## Cellars of note

Some private collections in the state would astonish the uninitiated, their cellars stocked with rare and coveted vintages.

The culture reflects the growing sophistication of Carolina wealth, which increasingly expresses itself through connoisseurship. For these collectors, wine is not mere consumption but a lifelong study — and a social world unto itself, conducted quietly over remarkable bottles among friends who understand.`,
  },
  {
    slug: "carolina-theater-historic-restoration-stages",
    title: "The Restored Theaters Bringing Life Back Downtown",
    excerpt:
      "Across the state, historic theaters saved from demolition are anchoring downtown revivals and reclaiming their role at the center of civic life.",
    date: "2026-01-15",
    credit: "Beatrice Langley",
    body: `A restored theater can do more than stage a show. Across the Carolinas, it is reviving entire downtowns.

## Saved from the wrecking ball

Historic theaters that once faced demolition are being lovingly restored, their ornate interiors and grand marquees brought back to life. These buildings, relics of an era when the theater anchored civic life, are reclaiming that central role.

The restorations are painstaking, honoring the original craftsmanship.

## Anchors of revival

A revived theater draws crowds downtown in the evening, supporting restaurants, shops and a sense of shared public life. It becomes a catalyst for broader renewal.

The pattern repeats across the state, as communities recognize that a great old theater is an asset worth saving. In restoring these stages, the Carolinas are not merely preserving architecture but rekindling the communal life that gathered around them.`,
  },
  {
    slug: "carolina-university-arts-town-gown",
    title: "How University Arts Programs Enrich Carolina Communities",
    excerpt:
      "The state's colleges and universities have become vital cultural engines, their galleries, stages and concert halls open to the towns around them.",
    date: "2025-10-17",
    credit: "Desmond Fairchild",
    body: `In many Carolina towns, the richest cultural life flows from the local campus.

## Culture from campus

The state's colleges and universities have become vital cultural engines, their galleries, theaters and concert halls presenting work that no private institution in the area could sustain. Crucially, much of it is open to the surrounding community.

Visiting artists, student productions and touring performances bring a steady cultural pulse to towns that would otherwise lack it.

## Town and gown

The relationship enriches both sides. The community gains access to serious art; the university deepens its civic role.

The arrangement is especially valuable in smaller towns, where the campus may be the primary cultural resource for miles. In opening their arts programs to the public, the state's universities extend their mission beyond the classroom, becoming the cultural anchors of the communities they call home.`,
  },
  {
    slug: "carolina-charity-auction-art-philanthropy",
    title: "When Art Meets Philanthropy: The Charity Auction Circuit",
    excerpt:
      "Benefit art auctions have become a fixture of the state's social calendar, channeling collectors' passions toward causes and emerging artists alike.",
    date: "2025-07-08",
    credit: "Ophelia Grant",
    body: `The charity art auction has become one of the Carolina social calendar's most productive rituals, serving artists and causes at once.

## Two goods at once

Benefit auctions channel collectors' enthusiasm toward worthy causes, raising money while spotlighting artists — often emerging local talent given a valuable platform. A single evening can fund a nonprofit's year and launch a painter's career.

The events blend the pleasures of collecting with the satisfactions of giving.

## The virtuous circle

For artists, the exposure is invaluable; for charities, the revenue is essential; for collectors, the evening offers both acquisition and philanthropy.

The circuit reflects the increasing sophistication of Carolina cultural philanthropy, which has learned to align private passions with public benefit. In the charity auction, the state's collectors have found a way to indulge their tastes and serve their communities in the very same gesture.`,
  },
  {
    slug: "carolina-private-clubs-social-tradition",
    title: "The Private Clubs at the Heart of Carolina Society",
    excerpt:
      "Discreet, tradition-bound and quietly influential, the state's private clubs remain central to how its establishment gathers, connects and gives back.",
    date: "2025-04-11",
    credit: "Reginald Ashworth",
    body: `Much of Carolina society still organizes itself, as it long has, around the private club.

## Tradition behind closed doors

Discreet and tradition-bound, the state's private clubs remain central to how the establishment gathers and connects. They are places of continuity, where relationships form across generations and social bonds are quietly maintained.

Membership signals belonging, and the clubs guard their character carefully.

## Evolving, slowly

The clubs are not immune to change. Many have worked, some belatedly, to broaden their membership and modernize their customs, balancing tradition against the expectations of a new era.

Their influence, though understated, is real. Beyond socializing, the clubs channel significant philanthropy and civic engagement. For all the mystery that surrounds them, they remain a durable feature of Carolina society — evolving, but enduring, at the heart of how the establishment lives.`,
  },
  {
    slug: "carolina-dance-ballet-company-rising",
    title: "The Ballet Company Bringing World-Class Dance to the Carolinas",
    excerpt:
      "Through ambitious programming and rising talent, a Carolina ballet company is earning recognition well beyond the state's borders.",
    date: "2025-01-22",
    credit: "Anushka Rao",
    body: `Great ballet is not confined to the great cities, as one ambitious Carolina company is proving.

## Ambition on stage

Through daring programming and a roster of rising talent, the company has earned recognition well beyond the state. It performs the classics with technical command and commissions new work that pushes the form.

The dancers are serious artists, many drawn from the country's finest schools.

## Building an audience

The company has worked to cultivate a local audience for an art form that can seem forbidding, through education and outreach as well as performance.

Its success reflects a broader cultural maturation in the state, which increasingly supports institutions of national caliber. In bringing world-class dance to Carolina stages, the company enriches the region's cultural life and stakes a claim to artistic ambition that few would have predicted a generation ago.`,
  },
  {
    slug: "carolina-food-festival-culinary-community",
    title: "The Food Festivals Feeding Carolina's Sense of Community",
    excerpt:
      "From barbecue gatherings to fine-dining showcases, the state's food festivals have become celebrations of place, heritage and shared table.",
    date: "2024-12-19",
    credit: "Marco Delacroix",
    body: `Food has always brought Carolinians together, and the state's growing roster of food festivals turns that instinct into celebration.

## Gathering at the table

From storied barbecue gatherings to sophisticated fine-dining showcases, the festivals celebrate the state's rich culinary heritage and its dynamic present. They draw crowds hungry for both the food and the fellowship.

The events honor tradition — the pitmasters and home cooks who carry it — while spotlighting the chefs shaping what comes next.

## Culture on a plate

More than meals, the festivals are expressions of place and community, affirming food's central role in Carolina life.

They also drive tourism and support local producers, weaving economic benefit into cultural celebration. In a state where the table has always been a gathering place, the food festival has become a natural extension — a communal feast that celebrates who Carolinians are, one shared plate at a time.`,
  },
  {
    slug: "carolina-public-art-murals-civic-identity",
    title: "The Public-Art Boom Reshaping Carolina Cities",
    excerpt:
      "Murals, sculptures and installations are transforming the state's urban landscapes, giving communities a vivid new sense of identity.",
    date: "2024-12-08",
    credit: "Elena Vásquez",
    body: `Walk through a Carolina city today and the walls themselves tell stories, in paint and steel and light.

## Art in the open

A public-art boom is transforming the state's urban landscapes, as murals, sculptures and installations proliferate. Once-blank walls now carry vivid imagery; plazas host ambitious sculpture. The art brings color, meaning and pride to shared spaces.

Cities and private patrons alike have embraced public art as a tool of placemaking.

## Identity in paint

The best public art reflects and shapes community identity, telling local stories and giving residents a sense of ownership over their surroundings.

The movement reflects a recognition that culture belongs in the streets, not only the galleries. In commissioning public art, Carolina cities are investing in their own character — and in the daily encounter between residents and beauty that transforms a place from a mere location into a home.`,
  },
];

generate("society-culture", articles);
