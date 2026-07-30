import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "house-of-ellison-charlotte-designer-rise",
    title: "House of Ellison and the Making of a Charlotte Fashion Label",
    excerpt:
      "In three seasons, designer Marguerite Ellison has turned a SouthPark studio into the most closely watched label in the state. Her secret is patience.",
    date: "2026-07-18",
    credit: "Delphine Marchetti",
    body: `Marguerite Ellison did not set out to build a fashion empire. She set out to make one perfect coat, and then another.

## The slow build

In three short seasons, House of Ellison has become the most discussed label in North Carolina, dressing the sort of women who could shop anywhere and choose to shop here. Ellison's approach is deliberately unhurried — small collections, natural fibers, silhouettes designed to outlast the season.

The studio in SouthPark functions as atelier and salon, where clients are fitted rather than merely sold to.

> "I would rather make a hundred women feel extraordinary than ten thousand feel fashionable," Ellison says.

## Against the churn

In an industry addicted to speed, that patience reads as radical. But it has earned Ellison a devoted following and a waitlist that grows with each collection.

The house's ambition is regional pride made tangible: proof that world-class design can carry a Carolina label.`,
  },
  {
    slug: "southern-tailoring-menswear-renaissance",
    title: "The Quiet Renaissance of Southern Menswear",
    excerpt:
      "From bespoke tailors in Raleigh to heritage shirtmakers in the Piedmont, Carolina men are rediscovering the pleasures of clothing made to last.",
    date: "2026-06-29",
    credit: "Julian Fairweather",
    body: `The Southern gentleman has always cared about clothes, whatever he might claim to the contrary. A new generation of Carolina tailors is giving that instinct somewhere to go.

## Made to measure

Bespoke and made-to-measure tailoring is enjoying a revival across the state, from Raleigh cutting rooms to Piedmont shirtmakers working with heritage fabrics.

The appeal is partly a reaction against disposable fashion — a desire for garments that fit properly and last for decades.

## Craft as counterculture

Younger clients, in particular, treat tailoring as a form of connoisseurship, learning the vocabulary of canvas and drape the way an earlier generation learned wine.

The renaissance is modest in scale but rich in conviction. In a throwaway age, a well-made jacket has become a quiet statement of values.`,
  },
  {
    slug: "tobacco-road-denim-heritage-manufacturing",
    title: "Tobacco Road Denim and the Return of Carolina-Made Clothing",
    excerpt:
      "Betting that shoppers will pay for provenance, a Piedmont denim brand is manufacturing entirely within the state — and finding a national audience.",
    date: "2026-06-14",
    credit: "Cormac Bishop",
    body: `The Carolinas once clothed the country. Then the mills moved offshore, and the knowledge nearly went with them. Tobacco Road Denim is wagering that some of it can come home.

## Every stitch, in-state

The brand manufactures entirely within North Carolina, from milling to cutting to sewing, and makes that provenance central to its pitch. Each pair of jeans carries the story of the hands that made it.

The economics are unforgiving — domestic labor costs far more — but the brand has found customers willing to pay for authenticity.

## Reviving a craft

Beyond selling jeans, the founders see themselves as preserving skills that a generation of offshoring nearly erased.

Whether heritage manufacturing can scale remains uncertain. But Tobacco Road has proved that Carolina-made clothing still has a market, if the story is true.`,
  },
  {
    slug: "asheville-slow-fashion-natural-dye",
    title: "The Natural Dyers Coloring Asheville's Slow-Fashion Movement",
    excerpt:
      "Working with indigo, walnut and marigold, a community of mountain textile artists is building garments that are as much ecology as fashion.",
    date: "2026-05-28",
    credit: "Wren Hollis",
    body: `The colors come from the earth: indigo blue, walnut brown, marigold gold. In Asheville, a community of natural dyers is turning that palette into a fashion philosophy.

## Color from the land

These textile artists eschew synthetic dyes entirely, extracting hue from plants, roots and minerals. The process is slow and imperfect, and that is the point — each piece varies, bearing the mark of its making.

The garments command premium prices, positioned less as clothing than as wearable craft.

## Fashion as ecology

For the dyers, the practice is inseparable from environmental conviction. Synthetic dyeing is among the most polluting processes in fashion; theirs leaves the water clean.

In the mountains, slow fashion is not a marketing phrase but a genuine ethic, colored quite literally by the landscape.`,
  },
  {
    slug: "carolina-bridal-ateliers-modern-heirloom",
    title: "The Bridal Ateliers Reinventing the Carolina Wedding Gown",
    excerpt:
      "Rejecting mass-market sameness, a handful of the state's designers are crafting heirloom gowns meant to be kept, altered and worn again across generations.",
    date: "2026-05-11",
    credit: "Ophelia Grant",
    body: `The wedding-industrial complex prizes novelty and volume. A small group of Carolina bridal designers is quietly rejecting both.

## The heirloom idea

These ateliers craft gowns intended to endure — pieces that can be preserved, altered and even passed down. The philosophy treats the wedding dress not as a single-use spectacle but as a family object.

The construction reflects the ambition: hand-finishing, quality materials, silhouettes chosen to age gracefully.

## Meaning over trend

Brides drawn to the approach tend to value story over spectacle, and many commission gowns that reference family history in subtle ways.

In an industry built on the disposable, the heirloom movement offers something rarer and more romantic: a dress with a future as well as a day.`,
  },
  {
    slug: "raleigh-fashion-week-emerging-designers",
    title: "Raleigh Fashion Week Grows From Showcase to Launchpad",
    excerpt:
      "Once a modest local event, the Triangle's fashion week has become a genuine proving ground for emerging Southern designers and the buyers who court them.",
    date: "2026-04-23",
    credit: "Simone Beaulieu",
    body: `For years, Raleigh Fashion Week was a pleasant local affair, more community celebration than industry event. That is no longer the case.

## From runway to real business

The event has matured into a serious platform for emerging Southern talent, attracting buyers, press and investors who once looked only to the coasts.

For young designers, a strong showing can translate into orders, mentorship and the credibility that opens doors.

## A Southern circuit

The growth reflects a broader decentralization of fashion, as talent and commerce spread beyond the traditional capitals.

Raleigh is unlikely to rival New York, and does not try to. Its ambition is more useful: to be the place where the South's next great designers are discovered.`,
  },
  {
    slug: "vintage-archival-fashion-collectors-durham",
    title: "The Archivists Turning Durham Into a Vintage Fashion Capital",
    excerpt:
      "Serious collectors and resale entrepreneurs are building a market for archival designer pieces, and turning the Bull City into an unlikely hub.",
    date: "2026-04-05",
    credit: "Rocco Vitale",
    body: `In a converted Durham warehouse, racks hold decades of fashion history — archival designer pieces sought by collectors from across the country.

## Fashion as artifact

The city has become an unlikely center for archival and vintage fashion, driven by a community of serious collectors who treat garments as cultural objects worthy of preservation.

The best pieces command prices that rival new luxury, valued for rarity, craftsmanship and provenance.

## Sustainable by nature

The trend dovetails with growing unease about fashion's environmental toll. Buying vintage, enthusiasts note, is the original sustainable practice.

Durham's archivists have built something more than a resale market. They have created a living museum of fashion, one whose exhibits happen to be for sale.`,
  },
  {
    slug: "cardinal-milliners-carolina-hat-tradition",
    title: "The Milliners Keeping the Carolina Hat Alive",
    excerpt:
      "From Derby season to Sunday best, a small guild of hatmakers is preserving a craft that refuses to fade, one blocked brim at a time.",
    date: "2026-03-19",
    credit: "Antoinette Duval",
    body: `The hat never really died in the South. It merely waited, and now a handful of Carolina milliners are ensuring the craft that makes it survives.

## Blocked by hand

Millinery is painstaking work — felt and straw shaped over wooden blocks, trimmed and finished by hand. The state's remaining milliners learned the trade from a dwindling number of masters.

Demand endures for occasions that still call for a proper hat: race days, weddings, church.

## Guardians of a craft

The milliners see themselves as custodians as much as makers, some now teaching to ensure the skills outlive them.

In a region where the hat remains part of the social vocabulary, their work is both commerce and preservation — keeping alive a tradition that steadfastly refuses to go out of style.`,
  },
  {
    slug: "carolina-jewelry-designers-gemstone-heritage",
    title: "Digging Deep: The Jewelers Mining North Carolina's Gemstone Legacy",
    excerpt:
      "The state is one of the few places on earth to yield emeralds, and a new generation of jewelers is building fine collections around homegrown stones.",
    date: "2026-02-28",
    credit: "Beatrix Sterling",
    body: `Few people associate fine jewelry with North Carolina. Fewer still know the state is among the rare places on earth to produce natural emeralds.

## Homegrown stones

A new generation of jewelers is building collections around these native gems, pairing local emeralds, garnets and other stones with contemporary design.

The provenance adds allure. A stone pulled from Carolina ground carries a story that an anonymous import cannot.

## From mine to atelier

The designers work closely with small-scale local miners, an approach that appeals to buyers increasingly concerned about the ethics of gemstone sourcing.

By turning the state's geological quirk into fine jewelry, these makers have given Carolina style a literal foundation — one dug from the earth beneath it.`,
  },
  {
    slug: "sustainable-fashion-rental-carolina",
    title: "The Rental Revolution Reaches the Carolina Wardrobe",
    excerpt:
      "Fashion rental has moved from novelty to habit, and local platforms are betting that the future of Southern style is borrowed, not bought.",
    date: "2026-02-13",
    credit: "Camille Ardoin",
    body: `The most fashionable dress at the next Charlotte gala may not belong to the woman wearing it, and increasingly, no one minds.

## Borrowed brilliance

Fashion rental has shed its novelty status to become a genuine habit, particularly for the occasion wear that once sat unused in closets. Local platforms now let clients rotate designer pieces without owning them.

The appeal is practical and financial: access to luxury without the commitment or the cost.

## The end of ownership?

The trend carries an environmental logic too, extending the life of each garment across many wearers.

Whether rental reshapes the wardrobe entirely remains to be seen. But for the Carolina woman who refuses to be photographed twice in the same gown, it has proved liberating.`,
  },
  {
    slug: "menswear-accessories-carolina-leather",
    title: "The Leather Workers Crafting Carolina's Finest Accessories",
    excerpt:
      "Belts, bags and boots made by hand in small Piedmont workshops are winning devotees who prize patina over logos.",
    date: "2026-01-26",
    credit: "Silas Hawthorne",
    body: `In small Piedmont workshops, artisans are cutting, stitching and burnishing leather into objects meant to last a lifetime.

## The patina principle

Carolina's leather workers craft belts, bags and boots by hand, using full-grain hides chosen to age beautifully. Their customers prize patina — the character a good piece develops over years of use.

The aesthetic is deliberately understated, favoring quality over conspicuous branding.

## Slow goods

The workshops operate at a human scale, some producing only a few pieces a week. That scarcity is part of the appeal.

For a clientele weary of logos and disposability, the leather workers offer an antidote: honest goods that grow more beautiful, and more personal, with time.`,
  },
  {
    slug: "carolina-fashion-retail-independent-boutiques",
    title: "How Independent Boutiques Are Outmaneuvering the Mall",
    excerpt:
      "As chain retail retreats, a wave of sharply curated independent shops is redefining how Carolinians discover and buy clothes.",
    date: "2026-01-12",
    credit: "Genevieve Lark",
    body: `The mall's decline was supposed to spell doom for fashion retail. Across the Carolinas, independent boutiques are proving the opposite.

## Curation as advantage

Where chains offered sameness, the new boutiques offer point of view — tightly edited selections reflecting an owner's taste. Shoppers come as much for the discovery as the goods.

The shops thrive on relationships, remembering customers' preferences and dressing them personally.

## Small, but mighty

Freed from the overhead and homogeneity of mall retail, these boutiques adapt quickly, championing emerging designers and local makers.

The lesson is clear: in an age of infinite online options, the winning strategy is not to compete on selection but on judgment — the human art of knowing what is good.`,
  },
  {
    slug: "southern-style-icons-carolina-influence",
    title: "The Enduring Grammar of Southern Style",
    excerpt:
      "What does it mean to dress like a Carolinian? A look at the codes, seasons and quiet rules that shape one of America's most distinctive regional wardrobes.",
    date: "2025-11-05",
    credit: "Margot Sinclair",
    body: `Southern style is easy to caricature and hard to define. It is not a uniform so much as a grammar — a set of unspoken rules about occasion, season and restraint.

## Codes and seasons

The Carolina wardrobe honors distinctions the rest of the country has largely abandoned: the shift from heavier to lighter cloth, the clothing appropriate to church or club or porch.

Underlying it all is a preference for polish without ostentation — being well-dressed without appearing to have tried.

## Tradition, evolving

Younger Carolinians reinterpret these codes rather than discard them, blending inherited instincts with contemporary taste.

The result is a regional style that endures precisely because it adapts — rooted enough to mean something, flexible enough to stay alive.`,
  },
  {
    slug: "carolina-textile-innovation-performance-fabric",
    title: "The Lab-Coats Behind Carolina's Next-Generation Fabrics",
    excerpt:
      "Building on the state's textile heritage, researchers and startups are engineering performance and sustainable fabrics that could clothe the future.",
    date: "2025-07-22",
    credit: "Dr. Ravi Menon",
    body: `The Carolinas' textile story did not end with the mills. It moved into the laboratory.

## From loom to lab

Researchers and startups across the state are engineering advanced fabrics — materials that regulate temperature, resist stains or decompose harmlessly at end of life.

The work builds on a deep regional expertise in textiles, redirected from mass production toward high-value innovation.

## Clothing the future

Some of these fabrics are already appearing in performance and outdoor brands; others remain in development.

The ambition is to reclaim the Carolinas' textile leadership not through volume but through invention — proving that the region that once wove America's clothes might yet design what everyone wears next.`,
  },
  {
    slug: "belle-birch-childrens-heirloom-clothing",
    title: "Belle & Birch and the Revival of Heirloom Children's Wear",
    excerpt:
      "Hand-smocked and made to be handed down, a Carolina children's label is turning against fast fashion's youngest frontier.",
    date: "2025-04-15",
    credit: "Prudence Callaway",
    body: `Children outgrow clothes in months, which makes them fashion's most disposable customers. Belle & Birch is politely refusing that premise.

## Made to be handed down

The Carolina label crafts heirloom children's wear — hand-smocked, finely made garments designed to survive one child and dress the next. The pieces echo a Southern tradition of clothing meant to be passed down through families.

The construction is deliberate: generous seams for letting out, fabrics that soften rather than wear.

## Against the churn

In a category defined by cheap, fleeting garments, the approach is quietly countercultural, appealing to parents who value permanence and craft.

Belle & Birch sells more than clothing. It sells continuity — the idea that even a child's dress can become a small family heirloom.`,
  },
  {
    slug: "carolina-stylists-personal-shopping-service",
    title: "The Personal Stylists Quietly Dressing the Carolina Elite",
    excerpt:
      "Discreet, expensive and increasingly in demand, a corps of personal stylists has become an essential fixture of the state's affluent wardrobes.",
    date: "2025-01-30",
    credit: "Lorenzo Bianchi",
    body: `The best-dressed people in the Carolinas often share a secret: someone else is choosing their clothes.

## The invisible hand

A growing corps of personal stylists now serves the state's affluent, editing wardrobes, sourcing pieces and managing the logistics of dressing well. The service is discreet by design — the whole point is that the effort remains unseen.

Clients range from executives with no time to shop to social figures who cannot afford a misstep.

## Taste, outsourced

Critics might call it dressing by proxy. Devotees call it sanity, a way to look impeccable without the hours it would otherwise demand.

As Carolina wealth grows more comfortable with luxury, the personal stylist has quietly become as ordinary a fixture as the personal trainer.`,
  },
  {
    slug: "carolina-artisan-shoes-cobblers",
    title: "The Cobblers Refusing to Let Fine Shoemaking Die",
    excerpt:
      "In an age of disposable footwear, a few Carolina craftsmen are making and resoling shoes built to be repaired for decades.",
    date: "2024-12-22",
    credit: "Ambrose Whitcombe",
    body: `Most shoes today are made to be thrown away. A handful of Carolina craftsmen are making shoes meant to be repaired forever.

## Built to be rebuilt

These artisan shoemakers and cobblers construct footwear the traditional way — welted, resoleable, designed to be maintained across decades rather than discarded after a season.

The same workshops keep alive the vanishing skill of repair, giving fine shoes second and third lives.

## A durable philosophy

The economics favor patience: a well-made pair costs more upfront but far less over a lifetime of resoling.

For a small but devoted clientele, the craftsmen offer more than footwear. They offer a rebuke to disposability, one carefully stitched sole at a time.`,
  },
];

generate("style-fashion", articles);
