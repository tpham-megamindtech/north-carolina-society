import { generate } from "./gen.mjs";

const articles = [
  {
    slug: "blue-ridge-parkway-slow-road-cover",
    title: "The Slow Road: Rediscovering the Blue Ridge Parkway",
    excerpt:
      "America's most beloved drive was built for lingering, not arriving. A journey along its 469 miles reveals a Carolina that reveals itself only to those who slow down.",
    date: "2026-07-20",
    featured: true,
    credit: "Sebastián Cortez",
    body: `The Blue Ridge Parkway does not want you to hurry. Its speed limit is a suggestion toward stillness, its curves an argument against the interstate life. To drive it well is to unlearn the modern relationship to distance.

## Built for lingering

Threading the spine of the Southern Appalachians, the Parkway was conceived not as a route between places but as an experience in itself — an unspooling of overlooks, meadows and ridgelines that fold into blue distance.

The Carolina stretch is its most dramatic, climbing past mile-high summits and plunging into hollows where morning fog pools like water.

> "The mountains don't perform for you," a longtime ranger told us near Craggy Gardens. "They wait for you to notice them."

## The pull-off philosophy

The secret is to stop constantly. Each overlook offers a subtly different composition of the same eternal subject, and the traveler who resists the urge to make time is rewarded with a landscape that deepens the longer it is watched.

## A season for everything

Spring brings rhododendron; summer, cool green refuge; autumn, the famous fire of the hardwoods; winter, a stark and empty grandeur few bother to seek.

To drive the Parkway is to be reminded that the point of a great road is not where it ends. It is what it makes you see along the way.`,
  },
  {
    slug: "outer-banks-off-season-solitude",
    title: "The Outer Banks in Winter, When the Islands Belong to You",
    excerpt:
      "Strip away the summer crowds and the barrier islands reveal a wilder, more elemental character — and the season's best rates at their finest inns.",
    date: "2026-06-28",
    credit: "Coral Winters",
    body: `The Outer Banks most people know is a summer place — packed beaches, ice cream lines, traffic on the bypass. The Outer Banks worth knowing arrives after they leave.

## Elemental quiet

In winter, the barrier islands return to something like their original state: windswept, empty, ruled by weather. The beaches stretch for miles without a footprint. The lighthouses stand against gray skies with a severe beauty the postcards never capture.

The wildlife returns too, with migrating birds crowding the sounds.

## Room at the inn

The season brings a practical dividend. The finest inns and rental cottages, impossible to book in July, open up at a fraction of the price.

For travelers willing to trade sunbathing for solitude, the off-season Outer Banks offers the islands as they were meant to be experienced — vast, wild and entirely their own.`,
  },
  {
    slug: "asheville-culinary-destination-weekend",
    title: "Forty-Eight Hours in Asheville, America's Unlikely Culinary Capital",
    excerpt:
      "A mountain town of fewer than 100,000 has assembled a dining scene that rivals cities ten times its size. A weekend itinerary for the serious eater.",
    date: "2026-06-12",
    credit: "Matteo Fiorentino",
    body: `How a small mountain town became one of America's most exciting places to eat is a story about talent choosing to stay.

## A scene punching up

Asheville's dining reputation defies its size. Chefs who could work anywhere have chosen the mountains, drawn by extraordinary local ingredients and a community that supports ambition.

The result is a density of serious restaurants — from fire-cooked Appalachian fare to inventive tasting menus — that would flatter a city many times larger.

## The weekend plan

Two days is enough to taste the range: a Saturday market breakfast, a long lunch built on mountain produce, an evening of fermentation-forward cooking, a Sunday of coffee culture and pastry.

The through-line is place. Asheville's best kitchens cook the surrounding landscape, turning a weekend of eating into an education in Appalachian terroir.`,
  },
  {
    slug: "yadkin-valley-wine-country-carolina",
    title: "Carolina Wine Country Comes Into Its Own",
    excerpt:
      "The rolling vineyards of the Yadkin Valley have quietly matured into a serious wine region, complete with the tasting rooms and inns to match.",
    date: "2026-05-25",
    credit: "Isadora Klein",
    body: `Mention Carolina wine and you may still draw a smirk. The vintners of the Yadkin Valley have grown used to proving skeptics wrong.

## A region matures

The rolling foothills of the Yadkin Valley have developed into a genuine wine region, their soils and climate suited to varietals that thrive in the mid-Atlantic. The wines have earned real recognition, and the region has the tasting rooms, restaurants and inns to support a proper visit.

## The Tuscan comparison

Visitors often reach for European analogies, charmed by the landscape of vine-covered hills and stone tasting rooms.

The vintners themselves prefer to be judged on their own terms — as a New World region still discovering its identity.

For the traveler, the valley offers the pleasures of wine country without the crowds or prices of its famous cousins, a Carolina secret still early enough to feel like a discovery.`,
  },
  {
    slug: "grandfather-mountain-hiking-luxury-lodge",
    title: "High Country Luxury: Where to Stay in the Shadow of Grandfather Mountain",
    excerpt:
      "The rugged high country around Grandfather Mountain has gained a collection of lodges that pair serious wilderness access with genuine indulgence.",
    date: "2026-05-09",
    credit: "Rowan Ashby",
    body: `The high country of the northwestern mountains is North Carolina at its most rugged — and, increasingly, its most refined.

## Wilderness with a wine list

Around Grandfather Mountain, a collection of lodges now offers the rare combination of true wilderness access and genuine luxury. Guests hike serious trails by day and return to fine dining and deep soaking tubs by night.

The properties are designed to frame the landscape, with vast windows and outdoor spaces oriented toward the peaks.

## Adventure, softened

The formula appeals to travelers who want the mountains without the deprivation — the summit and the spa, the trail and the tasting menu.

In the shadow of one of the East's most dramatic peaks, hospitality has learned to match the setting: wild at the doorstep, indulgent within.`,
  },
  {
    slug: "ocracoke-island-ferry-escape",
    title: "Ocracoke, the Island at the End of the Ferry Line",
    excerpt:
      "Reachable only by boat, this remote Outer Banks village guards a slower, saltier way of life — and a dialect all its own.",
    date: "2026-04-20",
    credit: "Tobias Marsh",
    body: `Some places stay unspoiled because they are hard to reach. Ocracoke, accessible only by ferry, is one of them.

## Beyond the bridge

The remote village at the southern end of the Outer Banks has no bridge to the mainland, and that isolation has preserved a way of life the rest of the coast has largely lost. The pace is slow, the community tight, the pretension nonexistent.

Locals still speak with a distinctive brogue, a linguistic relic of the island's long seclusion.

## The reward of remoteness

Visitors who make the crossing find empty beaches, fresh seafood and a village that feels genuinely apart from the world.

Ocracoke asks for effort — the ferry, the planning, the surrender of connectivity — and repays it with something increasingly rare: a place that has not arranged itself for your convenience.`,
  },
  {
    slug: "highlands-cashiers-mountain-retreat-society",
    title: "Highlands and Cashiers, the Mountains' Most Exclusive Address",
    excerpt:
      "Perched on a high plateau, these twin resort towns have long drawn the South's elite to their cool summers, private clubs and understated grandeur.",
    date: "2026-04-01",
    credit: "Cornelia Vanderhoef",
    body: `On a high plateau in the southwestern mountains, the twin towns of Highlands and Cashiers have quietly hosted the Southern elite for generations.

## Cool summers, old money

The draw began with climate — a summer refuge from the lowland heat — and hardened into tradition. Families have vacationed here for generations, and the towns retain an air of understated, established wealth.

Private clubs, grand cottages and celebrated gardens define the social landscape.

## Refined, not flashy

What distinguishes the plateau is its restraint. This is not the ostentatious luxury of resort towns built for display, but the quieter grandeur of a place that has never needed to prove itself.

For those who know it, Highlands and Cashiers remain the mountains' most exclusive secret — hidden in plain sight at 4,000 feet.`,
  },
  {
    slug: "carolina-waterfalls-cascades-trail",
    title: "Chasing Waterfalls in the Land of a Thousand Cascades",
    excerpt:
      "The mountains of western North Carolina hold one of the densest concentrations of waterfalls in the country. A guide to the finest, from roadside to remote.",
    date: "2026-03-13",
    credit: "Linnea Frost",
    body: `Water defines the western mountains as surely as stone. Fed by some of the highest rainfall in the eastern United States, the region cascades with waterfalls beyond counting.

## From roadside to wilderness

The variety is remarkable. Some falls tumble beside the highway, demanding no more than a short walk; others hide miles into the backcountry, guarded by rugged trails.

A few are famous enough to draw crowds; many more remain the province of locals and the determined.

## The pursuit itself

Chasing waterfalls has become a beloved regional pastime, a reason to explore the forest and a reward at the end of the effort.

For the traveler, the falls offer an itinerary that writes itself — a sequence of cool, thundering destinations threaded through some of the most beautiful forest in America.`,
  },
  {
    slug: "wilmington-riverfront-coastal-getaway",
    title: "Wilmington, Where the River Meets the Sea",
    excerpt:
      "The port city pairs a handsomely restored historic riverfront with easy access to island beaches, making it the coast's most complete escape.",
    date: "2026-02-26",
    credit: "Preston Gale",
    body: `Most coastal towns offer either history or beach. Wilmington offers both, and the river besides.

## A city of two waters

The port city's handsomely restored historic district lines the Cape Fear River, its streets shaded by live oaks and lined with antebellum architecture. Minutes away, barrier-island beaches offer the requisite sand and surf.

The combination makes for an unusually complete escape — cultured evenings, beach days, and a walkable downtown between them.

## Substance beneath the charm

A thriving film industry and a growing food scene give the city an energy that many historic towns lack.

Wilmington's genius is refusing to choose. It is a beach town with a real downtown, a historic city with an ocean nearby — a coastal getaway that works in every season.`,
  },
  {
    slug: "great-smoky-mountains-national-park-carolina-side",
    title: "The Quieter Side of the Smokies",
    excerpt:
      "America's most visited national park has a Carolina flank that most tourists overlook — wilder, less crowded and closer to the mountains' true character.",
    date: "2026-02-11",
    credit: "Hazel Bramwell",
    body: `The Great Smoky Mountains draw more visitors than any national park in America, and most of them never see its finest side.

## The road less driven

The park's Carolina flank is quieter, wilder and less developed than its Tennessee counterpart. The crowds thin, the trails empty, and the mountains reveal the misty, layered character that gave them their name.

Elk graze in the valleys; old-growth forest survives in the coves.

## The rewards of patience

Reaching the best of it takes a little more effort — the Carolina approaches are winding and remote — but the payoff is a park that feels genuinely wild.

For travelers willing to skip the famous overlooks, the Smokies' Carolina side offers the mountains as they were before the crowds arrived: hushed, immense and utterly unhurried.`,
  },
  {
    slug: "carolina-glamping-luxury-camping-mountains",
    title: "Roughing It, Gently: The Rise of Carolina Glamping",
    excerpt:
      "Safari tents, treehouses and off-grid cabins are letting travelers sleep in the wilderness without surrendering a single comfort.",
    date: "2026-01-23",
    credit: "Aurelia Sands",
    body: `The tent has come a long way. In the Carolina mountains and along its rivers, a new generation of luxury camping is redefining what it means to sleep outdoors.

## Wilderness, with a bed

Glamping properties across the state offer safari tents, treehouses and off-grid cabins outfitted with real beds, proper bathrooms and often a wood stove or soaking tub. The wilderness is at the door; the deprivation is not.

The appeal is broad, drawing travelers who love nature but never learned to love a sleeping bag.

## Comfort as gateway

Purists may scoff, but glamping serves a purpose: it introduces the outdoors to people who would otherwise never spend a night in it.

For a state blessed with extraordinary landscapes, that is no small thing — a comfortable doorway into the wild.`,
  },
  {
    slug: "carolina-fly-fishing-mountain-streams",
    title: "The Art of the Cast: Fly Fishing the Carolina High Country",
    excerpt:
      "Cold, clear mountain streams and a growing network of guides have made western North Carolina a destination for anglers chasing wild trout.",
    date: "2026-01-09",
    credit: "Callum Reid",
    body: `There is a meditative quality to fly fishing that the Carolina mountains seem designed to enhance.

## Cold water, wild trout

The high country's streams run cold and clear, home to native brook trout and their introduced cousins. For anglers, the region offers hundreds of miles of fishable water, from easy roadside runs to remote headwaters reached only on foot.

A network of guides and outfitters has grown to serve the pursuit, teaching newcomers the patient art of the cast.

## More than the catch

Seasoned anglers speak less about fish than about place — the sound of moving water, the rhythm of casting, the deep quiet of a mountain stream.

Fly fishing, in the Carolina high country, is less a sport than a way of inhabiting the landscape, one careful cast at a time.`,
  },
  {
    slug: "biltmore-estate-gilded-age-tourism",
    title: "The Gilded-Age Estate That Built Asheville's Tourism",
    excerpt:
      "More than a century after its construction, America's largest private home continues to shape the fortunes and identity of its mountain city.",
    date: "2025-11-21",
    credit: "Rosalind Aldous",
    body: `No single building has shaped a Carolina city the way this Gilded-Age estate shaped Asheville.

## A house that made a city

Constructed at the turn of the twentieth century as a private residence of staggering ambition, the estate drew artisans, gardeners and tourists to the mountains and never stopped. More than a century on, it remains a cornerstone of the region's tourism economy.

Its grounds, wineries and seasonal displays draw visitors year-round.

## Living heritage

The estate has evolved into a self-sustaining enterprise, balancing preservation with the demands of mass tourism.

For Asheville, it is both an economic engine and an origin story — the grand house whose arrival transformed a mountain town into a destination, and whose presence still defines it today.`,
  },
  {
    slug: "crystal-coast-southern-outer-banks-beaches",
    title: "The Crystal Coast, the Outer Banks' Gentler Sibling",
    excerpt:
      "South of the famous barrier islands lies a stretch of coast with calmer waters, historic towns and a slower rhythm all its own.",
    date: "2025-08-27",
    credit: "Della Fairbanks",
    body: `The Outer Banks get the fame, but the coast to their south may be the better vacation.

## Calmer waters

The Crystal Coast offers gentler surf, warmer water and a more relaxed atmosphere than its dramatic northern neighbor. Its beaches are broad and clean, its historic waterfront towns full of maritime character.

The pace suits families and travelers seeking rest rather than spectacle.

## History at the shore

The area's seafaring heritage runs deep, from old fishing villages to the wild horses that roam a nearby barrier island.

For those who find the northern Outer Banks too exposed or too crowded, the Crystal Coast offers the same essential pleasures — sand, sea and salt air — in a softer, more forgiving key.`,
  },
  {
    slug: "carolina-scenic-railway-mountain-excursion",
    title: "All Aboard: The Scenic Railways Reviving Mountain Travel",
    excerpt:
      "Heritage rail excursions through gorges and across trestles are offering a nostalgic, unhurried way to experience the western landscape.",
    date: "2025-05-19",
    credit: "Everett Sinclair",
    body: `Before the highways, the railroad opened the Carolina mountains. Today, heritage rail is opening them again, in a slower and more romantic register.

## Travel as it was

Scenic railway excursions carry passengers through river gorges and across soaring trestles, retracing routes that once hauled timber and ore. The journeys are unhurried by design, the landscape the entire point.

The trains draw families, railfans and travelers charmed by the nostalgia of it all.

## The pleasure of the passage

There is something clarifying about a mode of travel that cannot be rushed. The scenery unrolls at a human pace, and the destination matters less than the ride.

For the western mountains, the railways offer both an economic boon and a reminder of a gentler way to move through a beautiful place.`,
  },
  {
    slug: "pinehurst-golf-sandhills-resort",
    title: "In the Sandhills, the Home of American Golf",
    excerpt:
      "The pine-scented Sandhills region has drawn golfers for over a century, its storied courses and resorts forming a pilgrimage site for the game's devotees.",
    date: "2025-02-09",
    credit: "Malcolm Ferris",
    body: `Golf in America has many homes, but few as storied as the Sandhills.

## A century of the game

The pine-scented, sandy-soiled region has drawn golfers for well over a hundred years, its celebrated courses hosting the game's greatest championships. For devotees, a visit is something close to a pilgrimage.

The resorts pair world-class golf with the genteel hospitality of a bygone era.

## Beyond the fairway

The appeal extends past the sport. The region's climate is mild, its landscape distinctive, its pace unhurried.

Whether or not one plays, the Sandhills offer a particular kind of Southern leisure — quiet, traditional and deeply rooted in a game that has defined the region for generations.`,
  },
  {
    slug: "linville-gorge-wilderness-backcountry",
    title: "Into Linville Gorge, the Grand Canyon of the East",
    excerpt:
      "One of the wildest and most rugged landscapes in the eastern United States rewards prepared adventurers with solitude and staggering beauty.",
    date: "2024-12-16",
    credit: "Ingrid Thornbury",
    body: `They call it the Grand Canyon of the East, and standing on its rim, the comparison feels earned.

## Genuine wilderness

Linville Gorge is among the wildest landscapes in the eastern United States — a rugged chasm of sheer cliffs, dense forest and a river far below. Protected as wilderness, it offers no comforts and few easy trails.

The terrain demands respect; the rewards are proportional.

## Solitude and scale

For prepared adventurers, the gorge offers something increasingly scarce in the crowded East: genuine solitude amid staggering beauty. Climbers, backpackers and photographers make the effort for views that feel almost western in scale.

Linville is not a casual destination. It is a wilderness in the true sense — and all the more precious for it in a region where such places are rare.`,
  },
  {
    slug: "bald-head-island-car-free-coastal-retreat",
    title: "Bald Head Island, Where the Cars Never Come",
    excerpt:
      "Reachable only by ferry and traversed only by golf cart, this maritime-forest island offers a rare kind of coastal peace.",
    date: "2024-12-03",
    credit: "Fenwick Adair",
    body: `On Bald Head Island, the loudest sound is often the wind in the palmettos. There are no cars, and their absence changes everything.

## A island without engines

Reachable only by ferry and navigated by golf cart, bicycle or foot, the island enforces a tranquility that most coastal destinations can only advertise. The result is a place where children roam freely and the pace slows to match the tides.

Much of the island remains protected maritime forest, home to nesting sea turtles and ancient live oaks.

## Peace by design

The car-free policy is not a gimmick but a philosophy, one that shapes the entire character of the place.

For travelers seeking genuine coastal peace — not the packaged kind, but the real article — Bald Head offers a rare and deliberate escape from the noise of the mainland.`,
  },
];

generate("travel-leisure", articles);
