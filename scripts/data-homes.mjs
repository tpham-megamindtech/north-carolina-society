import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "modern-mountain-house-blue-ridge-architecture",
    title: "The Modern Mountain House Rewriting Blue Ridge Architecture",
    excerpt:
      "A new architectural language is taking hold in the high country — one of glass, steel and restraint that frames the landscape rather than imitating the log cabin.",
    date: "2026-07-21",
    credit: "Halston Reeve",
    body: `For decades, building in the Carolina mountains meant one thing: the log cabin, or some heavy-timbered homage to it. A new generation of architects is proposing something braver.

## Glass against granite

The modern mountain house favors clean lines, expansive glass and a deliberate restraint that lets the landscape dominate. Rather than compete with the peaks in rustic bulk, these homes dissolve into them, framing views like living paintings.

Steel and concrete appear where timber once ruled, deployed with a light and confident hand.

> "The mountain is the architecture," one designer told us. "Our job is to get out of its way."

## Rooted, not rustic

The best of these houses remain deeply of their place, using local stone and orienting themselves to sun and ridge. They are contemporary without being cold.

The shift marks a maturing of mountain design — a move from nostalgia toward a modernism that honors the landscape by disappearing into it.`,
  },
  {
    slug: "charlotte-luxury-real-estate-myers-park",
    title: "Inside the Enduring Prestige of Charlotte's Grandest Neighborhood",
    excerpt:
      "Its canopied streets and stately homes have signified Charlotte money for a century. A look at why the city's most established address refuses to fade.",
    date: "2026-07-02",
    credit: "Vivienne Calloway",
    body: `Some addresses simply mean something, and in Charlotte, one leafy neighborhood has meant prestige for a hundred years.

## Old trees, old money

Its canopied streets, generous lots and stately homes have signified established wealth since the city's early boom. Generations of prominent families have lived there, and the neighborhood retains an air of settled permanence rare in a fast-growing metro.

Homes rarely come to market, and when they do, they command premiums that reflect scarcity as much as square footage.

## Continuity as luxury

What sustains the neighborhood's cachet is precisely its resistance to change. In a city constantly rebuilding itself, it offers the reassurance of the established.

For Charlotte's affluent, the address remains a statement not of new money's ambition but of old money's confidence — the quiet assurance of having arrived long ago.`,
  },
  {
    slug: "carolina-interior-designers-quiet-luxury",
    title: "The Interior Designers Defining Carolina Quiet Luxury",
    excerpt:
      "Rejecting trend and flash, a cadre of the state's decorators is building interiors around natural materials, heirloom pieces and a deep sense of restraint.",
    date: "2026-06-16",
    credit: "Marguerite Ashby",
    body: `The most sophisticated Carolina interiors are the ones you might not notice at first — and that is entirely the point.

## The art of restraint

A cadre of the state's leading interior designers has embraced what the industry calls quiet luxury: rooms built around natural materials, fine craftsmanship and heirloom pieces rather than statement furniture and of-the-moment trends.

The effect is calm, layered and timeless, revealing its quality slowly.

## Investment over impulse

Clients drawn to the approach tend to value permanence, commissioning rooms meant to last decades rather than seasons. Antiques mingle with custom work; nothing shouts.

In a design culture often addicted to novelty, the Carolina restraint reads as confidence — the sensibility of people who have nothing left to prove and everything to live with, comfortably, for years.`,
  },
  {
    slug: "lake-norman-waterfront-estates-market",
    title: "Life on the Water: The Boom in Lake Norman Estates",
    excerpt:
      "The state's largest man-made lake has become a magnet for luxury development, its shoreline lined with homes that treat the water as the ultimate amenity.",
    date: "2026-05-30",
    credit: "Preston Vaughn",
    body: `An hour north of Charlotte, the state's largest man-made lake has become one of its most coveted places to live.

## The waterfront premium

Lake Norman's long shoreline has drawn a wave of luxury development, with buyers paying handsomely for direct water access, private docks and long views across the lake. The water itself has become the ultimate amenity, organizing the design of every serious home.

Boathouses rival guest cottages; terraces cascade toward the shore.

## A community afloat

The lake supports a distinct lifestyle, one lived partly on the water, and the homes are designed around it.

As Charlotte's wealth grows, the lake's appeal only intensifies — a place where the city's affluent can retreat to the water without leaving its orbit, and where the shoreline itself has become the region's most valuable real estate.`,
  },
  {
    slug: "asheville-historic-preservation-arts-crafts",
    title: "The Preservationists Saving Asheville's Arts-and-Crafts Legacy",
    excerpt:
      "The mountain city holds one of the country's finest collections of early-twentieth-century architecture. A movement is fighting to keep it intact.",
    date: "2026-05-14",
    credit: "Cordelia Hensley",
    body: `Asheville's architectural riches are easy to take for granted, which is exactly what worries the people trying to save them.

## A city of its era

The mountain city preserves one of the finest concentrations of early-twentieth-century architecture in the country, from Arts-and-Crafts bungalows to grand civic buildings frozen in the moment its first boom ended.

That intactness is a treasure and a vulnerability, threatened by development pressure and the simple economics of maintenance.

## The fight to keep it

Preservationists work to protect the building stock through advocacy, restoration and adaptive reuse, arguing that the city's character is inseparable from its architecture.

The stakes are high. Asheville's appeal rests substantially on its sense of place, and that sense of place is built, quite literally, from the structures the preservationists are fighting to save.`,
  },
  {
    slug: "sustainable-architecture-passive-house-carolina",
    title: "The Carolina Architects Building Homes That Barely Sip Energy",
    excerpt:
      "Passive-house design and net-zero construction are moving from fringe experiment to luxury standard across the state.",
    date: "2026-04-27",
    credit: "Anders Lovegrove",
    body: `The greenest house is often the most comfortable, and a growing number of Carolina architects are proving it.

## Building tight, living easy

Passive-house design — with its super-insulation, airtight construction and heat-recovery ventilation — has moved from fringe experiment toward luxury standard. The resulting homes maintain even temperatures with minimal energy, comfortable and quiet in every season.

Net-zero construction, which generates as much energy as it consumes, is increasingly attainable.

## Green as premium

Once associated with sacrifice, sustainable building now signals sophistication. Affluent buyers embrace it for comfort and conscience alike, and the market has responded.

The Carolina climate, with its hot summers and mild winters, rewards the approach. What began as environmental idealism has become, quietly, a mark of the well-built luxury home.`,
  },
  {
    slug: "raleigh-modernist-architecture-legacy",
    title: "Raleigh's Modernist Legacy Finds a New Generation of Guardians",
    excerpt:
      "The Triangle holds a remarkable concentration of mid-century modernist homes. Young owners are restoring them with reverence and finding a devoted community.",
    date: "2026-04-08",
    credit: "Dashiell Frost",
    body: `The Triangle harbors a secret beloved by architecture enthusiasts: one of the South's great concentrations of mid-century modernist homes.

## A modernist enclave

Thanks to a celebrated design school and a mid-century building boom, the region is dotted with striking modernist houses — flat roofs, walls of glass, an optimistic embrace of the future.

For years, many were undervalued and at risk. That is changing.

## Restoration and community

A new generation of owners is restoring these homes with care, drawn to their clarity and light. A passionate community has formed around them, sharing knowledge and celebrating the region's design heritage.

The modernist houses, once overlooked, have become prized. In preserving them, their young guardians are keeping alive an optimistic architectural moment — and the region's claim to a distinctive design legacy.`,
  },
  {
    slug: "carolina-kitchen-design-heart-of-home",
    title: "The New Carolina Kitchen: Where Design Meets the Way We Live",
    excerpt:
      "Local designers are rethinking the kitchen as the true center of the home, blending professional function with the warmth of Southern hospitality.",
    date: "2026-03-21",
    credit: "Josephine Marlowe",
    body: `In the Carolina home, the kitchen has always been where people gather. Now design is finally catching up to that truth.

## Function meets hospitality

The state's leading kitchen designers are reimagining the room as the genuine heart of the home — spaces that pair professional-grade function with the warmth and openness of Southern hospitality.

Large islands anchor social life; walk-in pantries hide the clutter; materials are chosen to age gracefully and welcome use.

## Designed for gathering

The best of these kitchens dissolve the old boundary between cooking and entertaining, letting the host remain part of the party.

The shift reflects how Carolinians actually live — around food, together, without ceremony. The kitchen, once hidden away, has become the room around which the entire house, and the household, revolves.`,
  },
  {
    slug: "carolina-landscape-design-native-gardens",
    title: "The Landscape Designers Bringing the Carolina Wild Into the Garden",
    excerpt:
      "Rejecting the manicured lawn, a movement of designers is building gardens from native plants that support pollinators and echo the surrounding land.",
    date: "2026-03-02",
    credit: "Rosalind Thorne",
    body: `The perfect lawn is losing its grip on the Carolina imagination, and the landscape is better for it.

## Beyond the lawn

A movement of landscape designers is replacing thirsty, sterile turf with gardens built from native plants — grasses, wildflowers and shrubs that belong to the region and support its wildlife.

The results are looser and more alive than the manicured ideal, changing with the seasons and humming with pollinators.

## Beauty with purpose

The approach is as ecological as it is aesthetic. Native gardens require less water and no chemicals, and they restore habitat that conventional landscaping destroys.

For clients, the reward is a garden that feels rooted in its place — an extension of the surrounding Carolina landscape rather than an imposition upon it, beautiful precisely because it belongs.`,
  },
  {
    slug: "coastal-home-design-hurricane-resilient",
    title: "Building for the Storm: The New Rules of Carolina Coastal Design",
    excerpt:
      "As sea levels rise and storms intensify, architects along the coast are pioneering homes engineered to survive what the ocean sends.",
    date: "2026-02-17",
    credit: "Beckett Hale",
    body: `To build on the Carolina coast today is to build with the storm in mind.

## Designed to endure

Architects along the shoreline are pioneering homes engineered for resilience — elevated on pilings, wrapped in impact-rated glass, shaped to shed wind and water. The rising sea and intensifying storms have made durability the first principle of coastal design.

The engineering is serious, but the results need not be fortress-like.

## Resilience with grace

The best coastal architects fold these demands into beautiful buildings, proving that resilience and elegance can coexist. Elevation becomes a view; ruggedness becomes a style.

For coastal homeowners, the calculus has changed. A house on the water is no longer just a pleasure but a wager against the elements — and increasingly, one that good design is engineered to win.`,
  },
  {
    slug: "carolina-adaptive-reuse-mill-lofts",
    title: "From Mill to Home: The Adaptive Reuse Transforming Old Carolina",
    excerpt:
      "The state's abandoned textile mills and tobacco warehouses are finding second lives as some of its most characterful residences.",
    date: "2026-01-31",
    credit: "Lucian Prewitt",
    body: `The Carolinas' industrial past is being reborn as its residential future, one converted mill at a time.

## New life for old brick

Across the state, abandoned textile mills and tobacco warehouses are being transformed into distinctive homes — lofts with soaring ceilings, exposed brick and enormous windows that no new construction can replicate.

The buildings carry a patina of history that gives them instant character.

## Preservation as housing

Adaptive reuse serves multiple ends at once: it preserves architecturally significant buildings, adds housing to growing cities and honors the industrial heritage that built the region.

For buyers, the appeal is authenticity — the sense of living inside a piece of history. For communities, it is a way to grow without erasing the past, turning the relics of an old economy into the homes of a new one.`,
  },
  {
    slug: "carolina-craft-furniture-makers-legacy",
    title: "The Furniture Makers Keeping a Carolina Tradition Alive",
    excerpt:
      "In a state once synonymous with furniture, a community of studio makers is preserving the craft at the highest level, one commissioned piece at a time.",
    date: "2026-01-16",
    credit: "Adaline Cooper",
    body: `North Carolina made America's furniture for a century. Most of that industry is gone, but its finest thread survives.

## The craft endures

A community of studio furniture makers continues the tradition at its highest level — designing and building heirloom pieces by hand, often on commission. Their work descends from the region's deep woodworking heritage but answers to contemporary taste.

Each piece is made to last generations, joined and finished with a care mass production abandoned long ago.

## Heirlooms, made to order

Clients commission these makers for the same reasons collectors buy art: quality, provenance and the pleasure of the singular.

In preserving the craft, the makers preserve something of the state's identity. The furniture may no longer roll off Carolina assembly lines, but at the workbench, the tradition remains very much alive.`,
  },
  {
    slug: "backyard-cottage-adu-carolina-housing",
    title: "The Backyard Cottage Comes to the Carolina Yard",
    excerpt:
      "Accessory dwelling units are reshaping how families house aging parents, grown children and guests — and quietly densifying the state's neighborhoods.",
    date: "2025-12-01",
    credit: "Miriam Wexler",
    body: `The most interesting new housing in the Carolinas is often hiding in the backyard.

## Small houses, big role

Accessory dwelling units — compact cottages built behind existing homes — are proliferating across the state. Families use them to house aging parents, grown children or guests, and increasingly to generate rental income.

Well-designed, these small structures pack surprising comfort into a modest footprint.

## Density, gently

Beyond their household uses, the cottages quietly add housing to established neighborhoods without altering their character — a gentle densification that many cities now encourage.

The trend reflects changing family structures and housing economics alike. In a state grappling with growth and affordability, the humble backyard cottage has emerged as an unexpectedly powerful tool, and a genuinely charming one.`,
  },
  {
    slug: "carolina-smart-home-luxury-technology",
    title: "The Invisible Luxury of the Carolina Smart Home",
    excerpt:
      "At the high end, home technology has grown so seamless it disappears — and integrators are the new must-have members of the design team.",
    date: "2025-09-23",
    credit: "Ronan Whitfield",
    body: `The best home technology is the kind you never see, and in the Carolinas' finest homes, it has become nearly invisible.

## Seamless by design

At the high end, smart-home systems now manage lighting, climate, security and entertainment so smoothly that the technology recedes entirely. Screens and switches give way to automation that simply anticipates.

Achieving that seamlessness requires expertise, and specialized integrators have become essential members of the design team.

## Technology, tamed

The goal is not gadgetry but calm — a house that responds intuitively and never demands attention. Done poorly, home tech frustrates; done well, it dissolves.

For affluent Carolina homeowners, the ultimate luxury is no longer the presence of technology but its disappearance — a home that works flawlessly and quietly, its intelligence felt rather than seen.`,
  },
  {
    slug: "carolina-pool-house-outdoor-living",
    title: "The Great Outdoors, Refined: Carolina's Outdoor-Living Boom",
    excerpt:
      "In a climate made for it, the state's designers are building outdoor rooms as considered and luxurious as anything indoors.",
    date: "2025-06-17",
    credit: "Estelle Bardot",
    body: `The Carolina climate practically demands outdoor living, and the state's designers are finally treating the outdoors with the seriousness it deserves.

## Rooms without walls

Outdoor spaces are being designed as genuine rooms — with full kitchens, fireplaces, weatherproof furnishings and thoughtful lighting. The pool house has evolved from utilitarian shed to elegant pavilion.

The mild climate makes these spaces usable for much of the year, extending the home into the landscape.

## Blurring the boundary

The best designs erase the line between inside and out, with retracting walls and continuous materials that let one flow into the other.

For a region blessed with long, temperate seasons, the outdoor-living boom feels overdue — a recognition that in the Carolinas, some of the finest rooms in the house have no roof at all.`,
  },
  {
    slug: "carolina-architectural-salvage-reclaimed",
    title: "The Salvage Hunters Giving Old Carolina New Life",
    excerpt:
      "Reclaimed heart pine, antique hardware and architectural fragments are prized ingredients in the state's most characterful interiors.",
    date: "2025-03-05",
    credit: "Thaddeus Combe",
    body: `Some of the most sought-after building materials in the Carolinas are older than the houses they end up in.

## The value of the old

Salvage dealers across the state trade in reclaimed heart pine, antique hardware, old doors and architectural fragments rescued from demolished buildings. These materials carry a character — a patina, a density, a history — that new products cannot match.

Designers prize them for adding soul to new construction and authenticity to restorations.

## Waste not

The practice is deeply sustainable, keeping usable materials out of landfills and reducing demand for new resources. Reclaimed heart pine, in particular, comes from old-growth trees that no longer exist.

For those building or renovating with care, the salvage hunters offer irreplaceable ingredients — the literal bones of old Carolina, given a second life in the homes of the present.`,
  },
  {
    slug: "carolina-color-southern-interior-palette",
    title: "The Southern Palette: How Carolina Designers Use Color",
    excerpt:
      "From haint-blue porch ceilings to soft, light-washed interiors, color in the Carolina home carries meaning as well as beauty.",
    date: "2024-12-27",
    credit: "Cecily Rainford",
    body: `Color in the Southern home is never merely decorative. It carries tradition, climate and meaning.

## A palette with roots

Carolina designers draw on a distinctive regional palette — the soft, light-washed hues that flatter the Southern sun, the famous haint blue painted on porch ceilings by tradition, the deep greens and warm neutrals that echo the landscape.

Each choice reflects both aesthetics and heritage.

## Light and climate

The region's abundant natural light shapes how color reads, and skilled designers work with it rather than against it, choosing tones that shift beautifully through the day.

The result is interiors that feel unmistakably of their place — rooms whose colors speak a Southern dialect. In the Carolina home, the palette is a language, and the best designers are fluent in it.`,
  },
  {
    slug: "carolina-bathroom-sanctuary-spa-design",
    title: "The Bath as Sanctuary: Carolina's Spa-Inspired Retreats",
    excerpt:
      "The primary bathroom has become the home's most personal luxury, and the state's designers are treating it as a private wellness retreat.",
    date: "2024-12-11",
    credit: "Lavinia Ostrander",
    body: `The bathroom, long the home's most utilitarian room, has quietly become its most indulgent.

## A private retreat

Carolina designers are reimagining the primary bath as a spa-inspired sanctuary — a place for soaking tubs, rainfall showers, heated floors and natural materials chosen for calm. The room now serves ritual as much as routine.

The influence of the wellness movement is unmistakable, importing the language of the spa into the home.

## Luxury made personal

Unlike the public rooms, the bath answers only to its owner, which makes it a canvas for deeply personal luxury.

For affluent Carolinians, the spa bath has become a daily retreat — a private corner of the home devoted entirely to restoration, and increasingly the room in which the household's design budget is most lavishly spent.`,
  },
];

generate("homes-design", articles);
