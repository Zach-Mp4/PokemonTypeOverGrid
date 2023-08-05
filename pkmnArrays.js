const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

const moves = ['pound', 
 'karate-chop', 
 'double-slap', 
 'comet-punch', 
 'mega-punch', 
 'pay-day', 
 'fire-punch', 
 'ice-punch', 
 'thunder-punch', 
 'scratch', 
 'vice-grip', 
 'guillotine', 
 'razor-wind', 
 'swords-dance', 
 'cut', 
 'gust', 
 'wing-attack', 
 'whirlwind', 
 'fly', 
 'bind', 
 'slam', 
 'vine-whip', 
 'stomp', 
 'double-kick', 
 'mega-kick', 
 'jump-kick', 
 'rolling-kick', 
 'sand-attack', 
 'headbutt', 
 'horn-attack', 
 'fury-attack', 
 'horn-drill', 
 'tackle', 
 'body-slam', 
 'wrap', 
 'take-down', 
 'thrash', 
 'double-edge', 
 'tail-whip', 
 'poison-sting', 
 'twineedle', 
 'pin-missile', 
 'leer', 
 'bite', 
 'growl', 
 'roar', 
 'sing', 
 'supersonic', 
 'sonic-boom', 
 'disable', 
 'acid', 
 'ember', 
 'flamethrower', 
 'mist', 
 'water-gun', 
 'hydro-pump', 
 'surf', 
 'ice-beam', 
 'blizzard', 
 'psybeam', 
 'bubble-beam', 
 'aurora-beam', 
 'hyper-beam', 
 'peck', 
 'drill-peck', 
 'submission', 
 'low-kick', 
 'counter', 
 'seismic-toss', 
 'strength', 
 'absorb', 
 'mega-drain', 
 'leech-seed', 
 'growth', 
 'razor-leaf', 
 'solar-beam', 
 'poison-powder', 
 'stun-spore', 
 'sleep-powder', 
 'petal-dance', 
 'string-shot', 
 'dragon-rage', 
 'fire-spin', 
 'thunder-shock', 
 'thunderbolt', 
 'thunder-wave', 
 'thunder', 
 'rock-throw', 
 'earthquake', 
 'fissure', 
 'dig', 
 'toxic', 
 'confusion', 
 'psychic', 
 'hypnosis', 
 'meditate', 
 'agility', 
 'quick-attack', 
 'rage', 
 'teleport', 
 'night-shade', 
 'mimic', 
 'screech', 
 'double-team', 
 'recover', 
 'harden', 
 'minimize', 
 'smokescreen', 
 'confuse-ray', 
 'withdraw', 
 'defense-curl', 
 'barrier', 
 'light-screen', 
 'haze', 
 'reflect', 
 'focus-energy', 
 'bide', 
 'metronome', 
 'mirror-move', 
 'self-destruct', 
 'egg-bomb', 
 'lick', 
 'smog', 
 'sludge', 
 'bone-club', 
 'fire-blast', 
 'waterfall', 
 'clamp', 
 'swift', 
 'skull-bash', 
 'spike-cannon', 
 'constrict', 
 'amnesia', 
 'kinesis', 
 'soft-boiled', 
 'high-jump-kick', 
 'glare', 
 'dream-eater', 
 'poison-gas', 
 'barrage', 
 'leech-life', 
 'lovely-kiss', 
 'sky-attack', 
 'transform', 
 'bubble', 
 'dizzy-punch', 
 'spore', 
 'flash', 
 'psywave', 
 'splash', 
 'acid-armor', 
 'crabhammer', 
 'explosion', 
 'fury-swipes', 
 'bonemerang', 
 'rest', 
 'rock-slide', 
 'hyper-fang', 
 'sharpen', 
 'conversion', 
 'tri-attack', 
 'super-fang', 
 'slash', 
 'substitute', 
 'struggle', 
 'sketch', 
 'triple-kick', 
 'thief', 
 'spider-web', 
 'mind-reader', 
 'nightmare', 
 'flame-wheel', 
 'snore', 
 'curse', 
 'flail', 
 'conversion-2', 
 'aeroblast', 
 'cotton-spore', 
 'reversal', 
 'spite', 
 'powder-snow', 
 'protect', 
 'mach-punch', 
 'scary-face', 
 'feint-attack', 
 'sweet-kiss', 
 'belly-drum', 
 'sludge-bomb', 
 'mud-slap', 
 'octazooka', 
 'spikes', 
 'zap-cannon', 
 'foresight', 
 'destiny-bond', 
 'perish-song', 
 'icy-wind', 
 'detect', 
 'bone-rush', 
 'lock-on', 
 'outrage', 
 'sandstorm', 
 'giga-drain', 
 'endure', 
 'charm', 
 'rollout', 
 'false-swipe', 
 'swagger', 
 'milk-drink', 
 'spark', 
 'fury-cutter', 
 'steel-wing', 
 'mean-look', 
 'attract', 
 'sleep-talk', 
 'heal-bell', 
 'return', 
 'present', 
 'frustration', 
 'safeguard', 
 'pain-split', 
 'sacred-fire', 
 'magnitude', 
 'dynamic-punch', 
 'megahorn', 
 'dragon-breath', 
 'baton-pass', 
 'encore', 
 'pursuit', 
 'rapid-spin', 
 'sweet-scent', 
 'iron-tail', 
 'metal-claw', 
 'vital-throw', 
 'morning-sun', 
 'synthesis', 
 'moonlight', 
 'hidden-power', 
 'cross-chop', 
 'twister', 
 'rain-dance', 
 'sunny-day', 
 'crunch', 
 'mirror-coat', 
 'psych-up', 
 'extreme-speed', 
 'ancient-power', 
 'shadow-ball', 
 'future-sight', 
 'rock-smash', 
 'whirlpool', 
 'beat-up', 
 'fake-out', 
 'uproar', 
 'stockpile', 
 'spit-up', 
 'swallow', 
 'heat-wave', 
 'hail', 
 'torment', 
 'flatter', 
 'will-o-wisp', 
 'memento', 
 'facade', 
 'focus-punch', 
 'smelling-salts', 
 'follow-me', 
 'nature-power', 
 'charge', 
 'taunt', 
 'helping-hand', 
 'trick', 
 'role-play', 
 'wish', 
 'assist', 
 'ingrain', 
 'superpower', 
 'magic-coat', 
 'recycle', 
 'revenge', 
 'brick-break', 
 'yawn', 
 'knock-off', 
 'endeavor', 
 'eruption', 
 'skill-swap', 
 'imprison', 
 'refresh', 
 'grudge', 
 'snatch', 
 'secret-power', 
 'dive', 
 'arm-thrust', 
 'camouflage', 
 'tail-glow', 
 'luster-purge', 
 'mist-ball', 
 'feather-dance', 
 'teeter-dance', 
 'blaze-kick', 
 'mud-sport', 
 'ice-ball', 
 'needle-arm', 
 'slack-off', 
 'hyper-voice', 
 'poison-fang', 
 'crush-claw', 
 'blast-burn', 
 'hydro-cannon', 
 'meteor-mash', 
 'astonish', 
 'weather-ball', 
 'aromatherapy', 
 'fake-tears', 
 'air-cutter', 
 'overheat', 
 'odor-sleuth', 
 'rock-tomb', 
 'silver-wind', 
 'metal-sound', 
 'grass-whistle', 
 'tickle', 
 'cosmic-power', 
 'water-spout', 
 'signal-beam', 
 'shadow-punch', 
 'extrasensory', 
 'sky-uppercut', 
 'sand-tomb', 
 'sheer-cold', 
 'muddy-water', 
 'bullet-seed', 
 'aerial-ace', 
 'icicle-spear', 
 'iron-defense', 
 'block', 
 'howl', 
 'dragon-claw', 
 'frenzy-plant', 
 'bulk-up', 
 'bounce', 
 'mud-shot', 
 'poison-tail', 
 'covet', 
 'volt-tackle', 
 'magical-leaf', 
 'water-sport', 
 'calm-mind', 
 'leaf-blade', 
 'dragon-dance', 
 'rock-blast', 
 'shock-wave', 
 'water-pulse', 
 'doom-desire', 
 'psycho-boost', 
 'roost', 
 'gravity', 
 'miracle-eye', 
 'wake-up-slap', 
 'hammer-arm', 
 'gyro-ball', 
 'healing-wish', 
 'brine', 
 'natural-gift', 
 'feint', 
 'pluck', 
 'tailwind', 
 'acupressure', 
 'metal-burst', 
 'u-turn', 
 'close-combat', 
 'payback', 
 'assurance', 
 'embargo', 
 'fling', 
 'psycho-shift', 
 'trump-card', 
 'heal-block', 
 'wring-out', 
 'power-trick', 
 'gastro-acid', 
 'lucky-chant', 
 'me-first', 
 'copycat', 
 'power-swap', 
 'guard-swap', 
 'punishment', 
 'last-resort', 
 'worry-seed', 
 'sucker-punch', 
 'toxic-spikes', 
 'heart-swap', 
 'aqua-ring', 
 'magnet-rise', 
 'flare-blitz', 
 'force-palm', 
 'aura-sphere', 
 'rock-polish', 
 'poison-jab', 
 'dark-pulse', 
 'night-slash', 
 'aqua-tail', 
 'seed-bomb', 
 'air-slash', 
 'x-scissor', 
 'bug-buzz', 
 'dragon-pulse', 
 'dragon-rush', 
 'power-gem', 
 'drain-punch', 
 'vacuum-wave', 
 'focus-blast', 
 'energy-ball', 
 'brave-bird', 
 'earth-power', 
 'switcheroo', 
 'giga-impact', 
 'nasty-plot', 
 'bullet-punch', 
 'avalanche', 
 'ice-shard', 
 'shadow-claw', 
 'thunder-fang', 
 'ice-fang', 
 'fire-fang', 
 'shadow-sneak', 
 'mud-bomb', 
 'psycho-cut', 
 'zen-headbutt', 
 'mirror-shot', 
 'flash-cannon', 
 'rock-climb', 
 'defog', 
 'trick-room', 
 'draco-meteor', 
 'discharge', 
 'lava-plume', 
 'leaf-storm', 
 'power-whip', 
 'rock-wrecker', 
 'cross-poison', 
 'gunk-shot', 
 'iron-head', 
 'magnet-bomb', 
 'stone-edge', 
 'captivate', 
 'stealth-rock', 
 'grass-knot', 
 'chatter', 
 'judgment', 
 'bug-bite', 
 'charge-beam', 
 'wood-hammer', 
 'aqua-jet', 
 'attack-order', 
 'defend-order', 
 'heal-order', 
 'head-smash', 
 'double-hit', 
 'roar-of-time', 
 'spacial-rend', 
 'lunar-dance', 
 'crush-grip', 
 'magma-storm', 
 'dark-void', 
 'seed-flare', 
 'ominous-wind', 
 'shadow-force', 
 'hone-claws', 
 'wide-guard', 
 'guard-split', 
 'power-split', 
 'wonder-room', 
 'psyshock', 
 'venoshock', 
 'autotomize', 
 'rage-powder', 
 'telekinesis', 
 'magic-room', 
 'smack-down', 
 'storm-throw', 
 'flame-burst', 
 'sludge-wave', 
 'quiver-dance', 
 'heavy-slam', 
 'synchronoise', 
 'electro-ball', 
 'soak', 
 'flame-charge', 
 'coil', 
 'low-sweep', 
 'acid-spray', 
 'foul-play', 
 'simple-beam', 
 'entrainment', 
 'after-you', 
 'round', 
 'echoed-voice', 
 'chip-away', 
 'clear-smog', 
 'stored-power', 
 'quick-guard', 
 'ally-switch', 
 'scald', 
 'shell-smash', 
 'heal-pulse', 
 'hex', 
 'sky-drop', 
 'shift-gear', 
 'circle-throw', 
 'incinerate', 
 'quash', 
 'acrobatics', 
 'reflect-type', 
 'retaliate', 
 'final-gambit', 
 'bestow', 
 'inferno', 
 'water-pledge', 
 'fire-pledge', 
 'grass-pledge', 
 'volt-switch', 
 'struggle-bug', 
 'bulldoze', 
 'frost-breath', 
 'dragon-tail', 
 'work-up', 
 'electroweb', 
 'wild-charge', 
 'drill-run', 
 'dual-chop', 
 'heart-stamp', 
 'horn-leech', 
 'sacred-sword', 
 'razor-shell', 
 'heat-crash', 
 'leaf-tornado', 
 'steamroller', 
 'cotton-guard', 
 'night-daze', 
 'psystrike', 
 'tail-slap', 
 'hurricane', 
 'head-charge', 
 'gear-grind', 
 'searing-shot', 
 'techno-blast', 
 'relic-song', 
 'secret-sword', 
 'glaciate', 
 'bolt-strike', 
 'blue-flare', 
 'fiery-dance', 
 'freeze-shock', 
 'ice-burn', 
 'snarl', 
 'icicle-crash', 
 'v-create', 
 'fusion-flare', 
 'fusion-bolt', 
 'flying-press', 
 'mat-block', 
 'belch', 
 'rototiller', 
 'sticky-web', 
 'fell-stinger', 
 'phantom-force', 
 'trick-or-treat', 
 'noble-roar', 
 'ion-deluge', 
 'parabolic-charge', 
 'forests-curse', 
 'petal-blizzard', 
 'freeze-dry', 
 'disarming-voice', 
 'parting-shot', 
 'topsy-turvy', 
 'draining-kiss', 
 'crafty-shield', 
 'flower-shield', 
 'grassy-terrain', 
 'misty-terrain', 
 'electrify', 
 'play-rough', 
 'fairy-wind', 
 'moonblast', 
 'boomburst', 
 'fairy-lock', 
 'kings-shield', 
 'play-nice', 
 'confide', 
 'diamond-storm', 
 'steam-eruption', 
 'hyperspace-hole', 
 'water-shuriken', 
 'mystical-fire', 
 'spiky-shield', 
 'aromatic-mist', 
 'eerie-impulse', 
 'venom-drench', 
 'powder', 
 'geomancy', 
 'magnetic-flux', 
 'happy-hour', 
 'electric-terrain', 
 'dazzling-gleam', 
 'celebrate', 
 'hold-hands', 
 'baby-doll-eyes', 
 'nuzzle', 
 'hold-back', 
 'infestation', 
 'power-up-punch', 
 'oblivion-wing', 
 'thousand-arrows', 
 'thousand-waves', 
 'lands-wrath', 
 'light-of-ruin', 
 'origin-pulse', 
 'precipice-blades', 
 'dragon-ascent', 
 'hyperspace-fury', 
 'breakneck-blitz--physical', 
 'breakneck-blitz--special', 
 'all-out-pummeling--physical', 
 'all-out-pummeling--special', 
 'supersonic-skystrike--physical', 
 'supersonic-skystrike--special', 
 'acid-downpour--physical', 
 'acid-downpour--special', 
 'tectonic-rage--physical', 
 'tectonic-rage--special', 
 'continental-crush--physical', 
 'continental-crush--special', 
 'savage-spin-out--physical', 
 'savage-spin-out--special', 
 'never-ending-nightmare--physical', 
 'never-ending-nightmare--special', 
 'corkscrew-crash--physical', 
 'corkscrew-crash--special', 
 'inferno-overdrive--physical', 
 'inferno-overdrive--special', 
 'hydro-vortex--physical', 
 'hydro-vortex--special', 
 'bloom-doom--physical', 
 'bloom-doom--special', 
 'gigavolt-havoc--physical', 
 'gigavolt-havoc--special', 
 'shattered-psyche--physical', 
 'shattered-psyche--special', 
 'subzero-slammer--physical', 
 'subzero-slammer--special', 
 'devastating-drake--physical', 
 'devastating-drake--special', 
 'black-hole-eclipse--physical', 
 'black-hole-eclipse--special', 
 'twinkle-tackle--physical', 
 'twinkle-tackle--special', 
 'catastropika', 
 'shore-up', 
 'first-impression', 
 'baneful-bunker', 
 'spirit-shackle', 
 'darkest-lariat', 
 'sparkling-aria', 
 'ice-hammer', 
 'floral-healing', 
 'high-horsepower', 
 'strength-sap', 
 'solar-blade', 
 'leafage', 
 'spotlight', 
 'toxic-thread', 
 'laser-focus', 
 'gear-up', 
 'throat-chop', 
 'pollen-puff', 
 'anchor-shot', 
 'psychic-terrain', 
 'lunge', 
 'fire-lash', 
 'power-trip', 
 'burn-up', 
 'speed-swap', 
 'smart-strike', 
 'purify', 
 'revelation-dance', 
 'core-enforcer', 
 'trop-kick', 
 'instruct', 
 'beak-blast', 
 'clanging-scales', 
 'dragon-hammer', 
 'brutal-swing', 
 'aurora-veil', 
 'sinister-arrow-raid', 
 'malicious-moonsault', 
 'oceanic-operetta', 
 'guardian-of-alola', 
 'soul-stealing-7-star-strike', 
 'stoked-sparksurfer', 
 'pulverizing-pancake', 
 'extreme-evoboost', 
 'genesis-supernova', 
 'shell-trap', 
 'fleur-cannon', 
 'psychic-fangs', 
 'stomping-tantrum', 
 'shadow-bone', 
 'accelerock', 
 'liquidation', 
 'prismatic-laser', 
 'spectral-thief', 
 'sunsteel-strike', 
 'moongeist-beam', 
 'tearful-look', 
 'zing-zap', 
 'natures-madness', 
 'multi-attack', 
 '10-000-000-volt-thunderbolt', 
 'mind-blown', 
 'plasma-fists', 
 'photon-geyser', 
 'light-that-burns-the-sky', 
 'searing-sunraze-smash', 
 'menacing-moonraze-maelstrom', 
 'lets-snuggle-forever', 
 'splintered-stormshards', 
 'clangorous-soulblaze', 
 'zippy-zap', 
 'splishy-splash', 
 'floaty-fall', 
 'pika-papow', 
 'bouncy-bubble', 
 'buzzy-buzz', 
 'sizzly-slide', 
 'glitzy-glow', 
 'baddy-bad', 
 'sappy-seed', 
 'freezy-frost', 
 'sparkly-swirl', 
 'veevee-volley', 
 'double-iron-bash', 
 'max-guard', 
 'dynamax-cannon', 
 'snipe-shot', 
 'jaw-lock', 
 'stuff-cheeks', 
 'no-retreat', 
 'tar-shot', 
 'magic-powder', 
 'dragon-darts', 
 'teatime', 
 'octolock', 
 'bolt-beak', 
 'fishious-rend', 
 'court-change', 
 'max-flare', 
 'max-flutterby', 
 'max-lightning', 
 'max-strike', 
 'max-knuckle', 
 'max-phantasm', 
 'max-hailstorm', 
 'max-ooze', 
 'max-geyser', 
 'max-airstream', 
 'max-starfall', 
 'max-wyrmwind', 
 'max-mindstorm', 
 'max-rockfall', 
 'max-quake', 
 'max-darkness', 
 'max-overgrowth', 
 'max-steelspike', 
 'clangorous-soul', 
 'body-press', 
 'decorate', 
 'drum-beating', 
 'snap-trap', 
 'pyro-ball', 
 'behemoth-blade', 
 'behemoth-bash', 
 'aura-wheel', 
 'breaking-swipe', 
 'branch-poke', 
 'overdrive', 
 'apple-acid', 
 'grav-apple', 
 'spirit-break', 
 'strange-steam', 
 'life-dew', 
 'obstruct', 
 'false-surrender', 
 'meteor-assault', 
 'eternabeam', 
 'steel-beam', 
 'expanding-force', 
 'steel-roller', 
 'scale-shot', 
 'meteor-beam', 
 'shell-side-arm', 
 'misty-explosion', 
 'grassy-glide', 
 'rising-voltage', 
 'terrain-pulse', 
 'skitter-smack', 
 'burning-jealousy', 
 'lash-out', 
 'poltergeist', 
 'corrosive-gas', 
 'coaching', 
 'flip-turn', 
 'triple-axel', 
 'dual-wingbeat', 
 'scorching-sands', 
 'jungle-healing', 
 'wicked-blow', 
 'surging-strikes', 
 'thunder-cage', 
 'dragon-energy', 
 'freezing-glare', 
 'fiery-wrath', 
 'thunderous-kick', 
 'glacial-lance', 
 'astral-barrage', 
 'eerie-spell', 
 'dire-claw', 
 'psyshield-bash', 
 'power-shift', 
 'stone-axe', 
 'springtide-storm', 
 'mystical-power', 
 'raging-fury', 
 'wave-crash', 
 'chloroblast', 
 'mountain-gale', 
 'victory-dance', 
 'headlong-rush', 
 'barb-barrage', 
 'esper-wing', 
 'bitter-malice', 
 'shelter', 
 'triple-arrows', 
 'infernal-parade', 
 'ceaseless-edge', 
 'bleakwind-storm', 
 'wildbolt-storm', 
 'sandsear-storm', 
 'lunar-blessing', 
 'take-heart', 
 'tera-blast', 
 'silk-trap', 
 'axe-kick', 
 'last-respects', 
 'lumina-crash', 
 'order-up', 
 'jet-punch', 
 'spicy-extract', 
 'spin-out', 
 'population-bomb', 
 'ice-spinner', 
 'glaive-rush', 
 'revival-blessing', 
 'salt-cure', 
 'triple-dive', 
 'mortal-spin', 
 'doodle', 
 'fillet-away', 
 'kowtow-cleave', 
 'flower-trick', 
 'torch-song', 
 'aqua-step', 
 'raging-bull', 
 'make-it-rain', 
 'psyblade', 
 'hydro-steam', 
 'ruination', 
 'collision-course', 
 'electro-drift', 
 'shed-tail', 
 'chilly-reception', 
 'tidy-up', 
 'snowscape', 
 'pounce', 
 'trailblaze', 
 'chilling-water', 
 'hyper-drill', 
 'twin-beam', 
 'rage-fist', 
 'armor-cannon', 
 'bitter-blade', 
 'double-shock', 
 'gigaton-hammer', 
 'comeuppance', 
 'aqua-cutter', 
 'blazing-torque', 
 'wicked-torque', 
 'noxious-torque', 
 'combat-torque', 
 'magical-torque'];

 const pokemon = ['bulbasaur', 
  'ivysaur', 
  'venusaur', 
  'charmander', 
  'charmeleon', 
  'charizard', 
  'squirtle', 
  'wartortle', 
  'blastoise', 
  'caterpie', 
  'metapod', 
  'butterfree', 
  'weedle', 
  'kakuna', 
  'beedrill', 
  'pidgey', 
  'pidgeotto', 
  'pidgeot', 
  'rattata', 
  'raticate', 
  'spearow', 
  'fearow', 
  'ekans', 
  'arbok', 
  'pikachu', 
  'raichu', 
  'sandshrew', 
  'sandslash', 
  'nidoran-f', 
  'nidorina', 
  'nidoqueen', 
  'nidoran-m', 
  'nidorino', 
  'nidoking', 
  'clefairy', 
  'clefable', 
  'vulpix', 
  'ninetales', 
  'jigglypuff', 
  'wigglytuff', 
  'zubat', 
  'golbat', 
  'oddish', 
  'gloom', 
  'vileplume', 
  'paras', 
  'parasect', 
  'venonat', 
  'venomoth', 
  'diglett', 
  'dugtrio', 
  'meowth', 
  'persian', 
  'psyduck', 
  'golduck', 
  'mankey', 
  'primeape', 
  'growlithe', 
  'arcanine', 
  'poliwag', 
  'poliwhirl', 
  'poliwrath', 
  'abra', 
  'kadabra', 
  'alakazam', 
  'machop', 
  'machoke', 
  'machamp', 
  'bellsprout', 
  'weepinbell', 
  'victreebel', 
  'tentacool', 
  'tentacruel', 
  'geodude', 
  'graveler', 
  'golem', 
  'ponyta', 
  'rapidash', 
  'slowpoke', 
  'slowbro', 
  'magnemite', 
  'magneton', 
  'farfetchd', 
  'doduo', 
  'dodrio', 
  'seel', 
  'dewgong', 
  'grimer', 
  'muk', 
  'shellder', 
  'cloyster', 
  'gastly', 
  'haunter', 
  'gengar', 
  'onix', 
  'drowzee', 
  'hypno', 
  'krabby', 
  'kingler', 
  'voltorb', 
  'electrode', 
  'exeggcute', 
  'exeggutor', 
  'cubone', 
  'marowak', 
  'hitmonlee', 
  'hitmonchan', 
  'lickitung', 
  'koffing', 
  'weezing', 
  'rhyhorn', 
  'rhydon', 
  'chansey', 
  'tangela', 
  'kangaskhan', 
  'horsea', 
  'seadra', 
  'goldeen', 
  'seaking', 
  'staryu', 
  'starmie', 
  'mr-mime', 
  'scyther', 
  'jynx', 
  'electabuzz', 
  'magmar', 
  'pinsir', 
  'tauros', 
  'magikarp', 
  'gyarados', 
  'lapras', 
  'ditto', 
  'eevee', 
  'vaporeon', 
  'jolteon', 
  'flareon', 
  'porygon', 
  'omanyte', 
  'omastar', 
  'kabuto', 
  'kabutops', 
  'aerodactyl', 
  'snorlax', 
  'articuno', 
  'zapdos', 
  'moltres', 
  'dratini', 
  'dragonair', 
  'dragonite', 
  'mewtwo', 
  'mew', 
  'chikorita', 
  'bayleef', 
  'meganium', 
  'cyndaquil', 
  'quilava', 
  'typhlosion', 
  'totodile', 
  'croconaw', 
  'feraligatr', 
  'sentret', 
  'furret', 
  'hoothoot', 
  'noctowl', 
  'ledyba', 
  'ledian', 
  'spinarak', 
  'ariados', 
  'crobat', 
  'chinchou', 
  'lanturn', 
  'pichu', 
  'cleffa', 
  'igglybuff', 
  'togepi', 
  'togetic', 
  'natu', 
  'xatu', 
  'mareep', 
  'flaaffy', 
  'ampharos', 
  'bellossom', 
  'marill', 
  'azumarill', 
  'sudowoodo', 
  'politoed', 
  'hoppip', 
  'skiploom', 
  'jumpluff', 
  'aipom', 
  'sunkern', 
  'sunflora', 
  'yanma', 
  'wooper', 
  'quagsire', 
  'espeon', 
  'umbreon', 
  'murkrow', 
  'slowking', 
  'misdreavus', 
  'unown', 
  'wobbuffet', 
  'girafarig', 
  'pineco', 
  'forretress', 
  'dunsparce', 
  'gligar', 
  'steelix', 
  'snubbull', 
  'granbull', 
  'qwilfish', 
  'scizor', 
  'shuckle', 
  'heracross', 
  'sneasel', 
  'teddiursa', 
  'ursaring', 
  'slugma', 
  'magcargo', 
  'swinub', 
  'piloswine', 
  'corsola', 
  'remoraid', 
  'octillery', 
  'delibird', 
  'mantine', 
  'skarmory', 
  'houndour', 
  'houndoom', 
  'kingdra', 
  'phanpy', 
  'donphan', 
  'porygon2', 
  'stantler', 
  'smeargle', 
  'tyrogue', 
  'hitmontop', 
  'smoochum', 
  'elekid', 
  'magby', 
  'miltank', 
  'blissey', 
  'raikou', 
  'entei', 
  'suicune', 
  'larvitar', 
  'pupitar', 
  'tyranitar', 
  'lugia', 
  'ho-oh', 
  'celebi', 
  'treecko', 
  'grovyle', 
  'sceptile', 
  'torchic', 
  'combusken', 
  'blaziken', 
  'mudkip', 
  'marshtomp', 
  'swampert', 
  'poochyena', 
  'mightyena', 
  'zigzagoon', 
  'linoone', 
  'wurmple', 
  'silcoon', 
  'beautifly', 
  'cascoon', 
  'dustox', 
  'lotad', 
  'lombre', 
  'ludicolo', 
  'seedot', 
  'nuzleaf', 
  'shiftry', 
  'taillow', 
  'swellow', 
  'wingull', 
  'pelipper', 
  'ralts', 
  'kirlia', 
  'gardevoir', 
  'surskit', 
  'masquerain', 
  'shroomish', 
  'breloom', 
  'slakoth', 
  'vigoroth', 
  'slaking', 
  'nincada', 
  'ninjask', 
  'shedinja', 
  'whismur', 
  'loudred', 
  'exploud', 
  'makuhita', 
  'hariyama', 
  'azurill', 
  'nosepass', 
  'skitty', 
  'delcatty', 
  'sableye', 
  'mawile', 
  'aron', 
  'lairon', 
  'aggron', 
  'meditite', 
  'medicham', 
  'electrike', 
  'manectric', 
  'plusle', 
  'minun', 
  'volbeat', 
  'illumise', 
  'roselia', 
  'gulpin', 
  'swalot', 
  'carvanha', 
  'sharpedo', 
  'wailmer', 
  'wailord', 
  'numel', 
  'camerupt', 
  'torkoal', 
  'spoink', 
  'grumpig', 
  'spinda', 
  'trapinch', 
  'vibrava', 
  'flygon', 
  'cacnea', 
  'cacturne', 
  'swablu', 
  'altaria', 
  'zangoose', 
  'seviper', 
  'lunatone', 
  'solrock', 
  'barboach', 
  'whiscash', 
  'corphish', 
  'crawdaunt', 
  'baltoy', 
  'claydol', 
  'lileep', 
  'cradily', 
  'anorith', 
  'armaldo', 
  'feebas', 
  'milotic', 
  'castform', 
  'kecleon', 
  'shuppet', 
  'banette', 
  'duskull', 
  'dusclops', 
  'tropius', 
  'chimecho', 
  'absol', 
  'wynaut', 
  'snorunt', 
  'glalie', 
  'spheal', 
  'sealeo', 
  'walrein', 
  'clamperl', 
  'huntail', 
  'gorebyss', 
  'relicanth', 
  'luvdisc', 
  'bagon', 
  'shelgon', 
  'salamence', 
  'beldum', 
  'metang', 
  'metagross', 
  'regirock', 
  'regice', 
  'registeel', 
  'latias', 
  'latios', 
  'kyogre', 
  'groudon', 
  'rayquaza', 
  'jirachi', 
  'deoxys-normal', 
  'turtwig', 
  'grotle', 
  'torterra', 
  'chimchar', 
  'monferno', 
  'infernape', 
  'piplup', 
  'prinplup', 
  'empoleon', 
  'starly', 
  'staravia', 
  'staraptor', 
  'bidoof', 
  'bibarel', 
  'kricketot', 
  'kricketune', 
  'shinx', 
  'luxio', 
  'luxray', 
  'budew', 
  'roserade', 
  'cranidos', 
  'rampardos', 
  'shieldon', 
  'bastiodon', 
  'burmy', 
  'wormadam-plant', 
  'mothim', 
  'combee', 
  'vespiquen', 
  'pachirisu', 
  'buizel', 
  'floatzel', 
  'cherubi', 
  'cherrim', 
  'shellos', 
  'gastrodon', 
  'ambipom', 
  'drifloon', 
  'drifblim', 
  'buneary', 
  'lopunny', 
  'mismagius', 
  'honchkrow', 
  'glameow', 
  'purugly', 
  'chingling', 
  'stunky', 
  'skuntank', 
  'bronzor', 
  'bronzong', 
  'bonsly', 
  'mime-jr', 
  'happiny', 
  'chatot', 
  'spiritomb', 
  'gible', 
  'gabite', 
  'garchomp', 
  'munchlax', 
  'riolu', 
  'lucario', 
  'hippopotas', 
  'hippowdon', 
  'skorupi', 
  'drapion', 
  'croagunk', 
  'toxicroak', 
  'carnivine', 
  'finneon', 
  'lumineon', 
  'mantyke', 
  'snover', 
  'abomasnow', 
  'weavile', 
  'magnezone', 
  'lickilicky', 
  'rhyperior', 
  'tangrowth', 
  'electivire', 
  'magmortar', 
  'togekiss', 
  'yanmega', 
  'leafeon', 
  'glaceon', 
  'gliscor', 
  'mamoswine', 
  'porygon-z', 
  'gallade', 
  'probopass', 
  'dusknoir', 
  'froslass', 
  'rotom', 
  'uxie', 
  'mesprit', 
  'azelf', 
  'dialga', 
  'palkia', 
  'heatran', 
  'regigigas', 
  'giratina-altered', 
  'cresselia', 
  'phione', 
  'manaphy', 
  'darkrai', 
  'shaymin-land', 
  'arceus', 
  'victini', 
  'snivy', 
  'servine', 
  'serperior', 
  'tepig', 
  'pignite', 
  'emboar', 
  'oshawott', 
  'dewott', 
  'samurott', 
  'patrat', 
  'watchog', 
  'lillipup', 
  'herdier', 
  'stoutland', 
  'purrloin', 
  'liepard', 
  'pansage', 
  'simisage', 
  'pansear', 
  'simisear', 
  'panpour', 
  'simipour', 
  'munna', 
  'musharna', 
  'pidove', 
  'tranquill', 
  'unfezant', 
  'blitzle', 
  'zebstrika', 
  'roggenrola', 
  'boldore', 
  'gigalith', 
  'woobat', 
  'swoobat', 
  'drilbur', 
  'excadrill', 
  'audino', 
  'timburr', 
  'gurdurr', 
  'conkeldurr', 
  'tympole', 
  'palpitoad', 
  'seismitoad', 
  'throh', 
  'sawk', 
  'sewaddle', 
  'swadloon', 
  'leavanny', 
  'venipede', 
  'whirlipede', 
  'scolipede', 
  'cottonee', 
  'whimsicott', 
  'petilil', 
  'lilligant', 
  'basculin-red-striped', 
  'sandile', 
  'krokorok', 
  'krookodile', 
  'darumaka', 
  'darmanitan-standard', 
  'maractus', 
  'dwebble', 
  'crustle', 
  'scraggy', 
  'scrafty', 
  'sigilyph', 
  'yamask', 
  'cofagrigus', 
  'tirtouga', 
  'carracosta', 
  'archen', 
  'archeops', 
  'trubbish', 
  'garbodor', 
  'zorua', 
  'zoroark', 
  'minccino', 
  'cinccino', 
  'gothita', 
  'gothorita', 
  'gothitelle', 
  'solosis', 
  'duosion', 
  'reuniclus', 
  'ducklett', 
  'swanna', 
  'vanillite', 
  'vanillish', 
  'vanilluxe', 
  'deerling', 
  'sawsbuck', 
  'emolga', 
  'karrablast', 
  'escavalier', 
  'foongus', 
  'amoonguss', 
  'frillish', 
  'jellicent', 
  'alomomola', 
  'joltik', 
  'galvantula', 
  'ferroseed', 
  'ferrothorn', 
  'klink', 
  'klang', 
  'klinklang', 
  'tynamo', 
  'eelektrik', 
  'eelektross', 
  'elgyem', 
  'beheeyem', 
  'litwick', 
  'lampent', 
  'chandelure', 
  'axew', 
  'fraxure', 
  'haxorus', 
  'cubchoo', 
  'beartic', 
  'cryogonal', 
  'shelmet', 
  'accelgor', 
  'stunfisk', 
  'mienfoo', 
  'mienshao', 
  'druddigon', 
  'golett', 
  'golurk', 
  'pawniard', 
  'bisharp', 
  'bouffalant', 
  'rufflet', 
  'braviary', 
  'vullaby', 
  'mandibuzz', 
  'heatmor', 
  'durant', 
  'deino', 
  'zweilous', 
  'hydreigon', 
  'larvesta', 
  'volcarona', 
  'cobalion', 
  'terrakion', 
  'virizion', 
  'tornadus-incarnate', 
  'thundurus-incarnate', 
  'reshiram', 
  'zekrom', 
  'landorus-incarnate', 
  'kyurem', 
  'keldeo-ordinary', 
  'meloetta-aria', 
  'genesect', 
  'chespin', 
  'quilladin', 
  'chesnaught', 
  'fennekin', 
  'braixen', 
  'delphox', 
  'froakie', 
  'frogadier', 
  'greninja', 
  'bunnelby', 
  'diggersby', 
  'fletchling', 
  'fletchinder', 
  'talonflame', 
  'scatterbug', 
  'spewpa', 
  'vivillon', 
  'litleo', 
  'pyroar', 
  'flabebe', 
  'floette', 
  'florges', 
  'skiddo', 
  'gogoat', 
  'pancham', 
  'pangoro', 
  'furfrou', 
  'espurr', 
  'meowstic-male', 
  'honedge', 
  'doublade', 
  'aegislash-shield', 
  'spritzee', 
  'aromatisse', 
  'swirlix', 
  'slurpuff', 
  'inkay', 
  'malamar', 
  'binacle', 
  'barbaracle', 
  'skrelp', 
  'dragalge', 
  'clauncher', 
  'clawitzer', 
  'helioptile', 
  'heliolisk', 
  'tyrunt', 
  'tyrantrum', 
  'amaura', 
  'aurorus', 
  'sylveon', 
  'hawlucha', 
  'dedenne', 
  'carbink', 
  'goomy', 
  'sliggoo', 
  'goodra', 
  'klefki', 
  'phantump', 
  'trevenant', 
  'pumpkaboo-average', 
  'gourgeist-average', 
  'bergmite', 
  'avalugg', 
  'noibat', 
  'noivern', 
  'xerneas', 
  'yveltal', 
  'zygarde-50', 
  'diancie', 
  'hoopa', 
  'volcanion', 
  'rowlet', 
  'dartrix', 
  'decidueye', 
  'litten', 
  'torracat', 
  'incineroar', 
  'popplio', 
  'brionne', 
  'primarina', 
  'pikipek', 
  'trumbeak', 
  'toucannon', 
  'yungoos', 
  'gumshoos', 
  'grubbin', 
  'charjabug', 
  'vikavolt', 
  'crabrawler', 
  'crabominable', 
  'oricorio-baile', 
  'cutiefly', 
  'ribombee', 
  'rockruff', 
  'lycanroc-midday', 
  'wishiwashi-solo', 
  'mareanie', 
  'toxapex', 
  'mudbray', 
  'mudsdale', 
  'dewpider', 
  'araquanid', 
  'fomantis', 
  'lurantis', 
  'morelull', 
  'shiinotic', 
  'salandit', 
  'salazzle', 
  'stufful', 
  'bewear', 
  'bounsweet', 
  'steenee', 
  'tsareena', 
  'comfey', 
  'oranguru', 
  'passimian', 
  'wimpod', 
  'golisopod', 
  'sandygast', 
  'palossand', 
  'pyukumuku', 
  'type-null', 
  'silvally', 
  'minior-red-meteor', 
  'komala', 
  'turtonator', 
  'togedemaru', 
  'mimikyu-disguised', 
  'bruxish', 
  'drampa', 
  'dhelmise', 
  'jangmo-o', 
  'hakamo-o', 
  'kommo-o', 
  'tapu-koko', 
  'tapu-lele', 
  'tapu-bulu', 
  'tapu-fini', 
  'cosmog', 
  'cosmoem', 
  'solgaleo', 
  'lunala', 
  'nihilego', 
  'buzzwole', 
  'pheromosa', 
  'xurkitree', 
  'celesteela', 
  'kartana', 
  'guzzlord', 
  'necrozma', 
  'magearna', 
  'marshadow', 
  'poipole', 
  'naganadel', 
  'stakataka', 
  'blacephalon', 
  'zeraora', 
  'meltan', 
  'melmetal', 
  'grookey', 
  'thwackey', 
  'rillaboom', 
  'scorbunny', 
  'raboot', 
  'cinderace', 
  'sobble', 
  'drizzile', 
  'inteleon', 
  'skwovet', 
  'greedent', 
  'rookidee', 
  'corvisquire', 
  'corviknight', 
  'blipbug', 
  'dottler', 
  'orbeetle', 
  'nickit', 
  'thievul', 
  'gossifleur', 
  'eldegoss', 
  'wooloo', 
  'dubwool', 
  'chewtle', 
  'drednaw', 
  'yamper', 
  'boltund', 
  'rolycoly', 
  'carkol', 
  'coalossal', 
  'applin', 
  'flapple', 
  'appletun', 
  'silicobra', 
  'sandaconda', 
  'cramorant', 
  'arrokuda', 
  'barraskewda', 
  'toxel', 
  'toxtricity-amped', 
  'sizzlipede', 
  'centiskorch', 
  'clobbopus', 
  'grapploct', 
  'sinistea', 
  'polteageist', 
  'hatenna', 
  'hattrem', 
  'hatterene', 
  'impidimp', 
  'morgrem', 
  'grimmsnarl', 
  'obstagoon', 
  'perrserker', 
  'cursola', 
  'sirfetchd', 
  'mr-rime', 
  'runerigus', 
  'milcery', 
  'alcremie', 
  'falinks', 
  'pincurchin', 
  'snom', 
  'frosmoth', 
  'stonjourner', 
  'eiscue-ice', 
  'indeedee-male', 
  'morpeko-full-belly', 
  'cufant', 
  'copperajah', 
  'dracozolt', 
  'arctozolt', 
  'dracovish', 
  'arctovish', 
  'duraludon', 
  'dreepy', 
  'drakloak', 
  'dragapult', 
  'zacian', 
  'zamazenta', 
  'eternatus', 
  'kubfu', 
  'urshifu-single-strike', 
  'zarude', 
  'regieleki', 
  'regidrago', 
  'glastrier', 
  'spectrier', 
  'calyrex', 
  'wyrdeer', 
  'kleavor', 
  'ursaluna', 
  'basculegion-male', 
  'sneasler', 
  'overqwil', 
  'enamorus-incarnate', 
  'sprigatito', 
  'floragato', 
  'meowscarada', 
  'fuecoco', 
  'crocalor', 
  'skeledirge', 
  'quaxly', 
  'quaxwell', 
  'quaquaval', 
  'lechonk', 
  'oinkologne', 
  'tarountula', 
  'spidops', 
  'nymble', 
  'lokix', 
  'pawmi', 
  'pawmo', 
  'pawmot', 
  'tandemaus', 
  'maushold', 
  'fidough', 
  'dachsbun', 
  'smoliv', 
  'dolliv', 
  'arboliva', 
  'squawkabilly', 
  'nacli', 
  'naclstack', 
  'garganacl', 
  'charcadet', 
  'armarouge', 
  'ceruledge', 
  'tadbulb', 
  'bellibolt', 
  'wattrel', 
  'kilowattrel', 
  'maschiff', 
  'mabosstiff', 
  'shroodle', 
  'grafaiai', 
  'bramblin', 
  'brambleghast', 
  'toedscool', 
  'toedscruel', 
  'klawf', 
  'capsakid', 
  'scovillain', 
  'rellor', 
  'rabsca', 
  'flittle', 
  'espathra', 
  'tinkatink', 
  'tinkatuff', 
  'tinkaton', 
  'wiglett', 
  'wugtrio', 
  'bombirdier', 
  'finizen', 
  'palafin', 
  'varoom', 
  'revavroom', 
  'cyclizar', 
  'orthworm', 
  'glimmet', 
  'glimmora', 
  'greavard', 
  'houndstone', 
  'flamigo', 
  'cetoddle', 
  'cetitan', 
  'veluza', 
  'dondozo', 
  'tatsugiri', 
  'annihilape', 
  'clodsire', 
  'farigiraf', 
  'dudunsparce', 
  'kingambit', 
  'great-tusk', 
  'scream-tail', 
  'brute-bonnet', 
  'flutter-mane', 
  'slither-wing', 
  'sandy-shocks', 
  'iron-treads', 
  'iron-bundle', 
  'iron-hands', 
  'iron-jugulis', 
  'iron-moth', 
  'iron-thorns', 
  'frigibax', 
  'arctibax', 
  'baxcalibur', 
  'gimmighoul', 
  'gholdengo', 
  'wo-chien', 
  'chien-pao', 
  'ting-lu', 
  'chi-yu', 
  'roaring-moon', 
  'iron-valiant', 
  'koraidon', 
  'miraidon'];

  const abilities = ['stench', 
   'drizzle', 
   'speed-boost', 
   'battle-armor', 
   'sturdy', 
   'damp', 
   'limber', 
   'sand-veil', 
   'static', 
   'volt-absorb', 
   'water-absorb', 
   'oblivious', 
   'cloud-nine', 
   'compound-eyes', 
   'insomnia', 
   'color-change', 
   'immunity', 
   'flash-fire', 
   'shield-dust', 
   'own-tempo', 
   'suction-cups', 
   'intimidate', 
   'shadow-tag', 
   'rough-skin', 
   'wonder-guard', 
   'levitate', 
   'effect-spore', 
   'synchronize', 
   'clear-body', 
   'natural-cure', 
   'lightning-rod', 
   'serene-grace', 
   'swift-swim', 
   'chlorophyll', 
   'illuminate', 
   'trace', 
   'huge-power', 
   'poison-point', 
   'inner-focus', 
   'magma-armor', 
   'water-veil', 
   'magnet-pull', 
   'soundproof', 
   'rain-dish', 
   'sand-stream', 
   'pressure', 
   'thick-fat', 
   'early-bird', 
   'flame-body', 
   'run-away', 
   'keen-eye', 
   'hyper-cutter', 
   'pickup', 
   'truant', 
   'hustle', 
   'cute-charm', 
   'plus', 
   'minus', 
   'forecast', 
   'sticky-hold', 
   'shed-skin', 
   'guts', 
   'marvel-scale', 
   'liquid-ooze', 
   'overgrow', 
   'blaze', 
   'torrent', 
   'swarm', 
   'rock-head', 
   'drought', 
   'arena-trap', 
   'vital-spirit', 
   'white-smoke', 
   'pure-power', 
   'shell-armor', 
   'air-lock', 
   'tangled-feet', 
   'motor-drive', 
   'rivalry', 
   'steadfast', 
   'snow-cloak', 
   'gluttony', 
   'anger-point', 
   'unburden', 
   'heatproof', 
   'simple', 
   'dry-skin', 
   'download', 
   'iron-fist', 
   'poison-heal', 
   'adaptability', 
   'skill-link', 
   'hydration', 
   'solar-power', 
   'quick-feet', 
   'normalize', 
   'sniper', 
   'magic-guard', 
   'no-guard', 
   'stall', 
   'technician', 
   'leaf-guard', 
   'klutz', 
   'mold-breaker', 
   'super-luck', 
   'aftermath', 
   'anticipation', 
   'forewarn', 
   'unaware', 
   'tinted-lens', 
   'filter', 
   'slow-start', 
   'scrappy', 
   'storm-drain', 
   'ice-body', 
   'solid-rock', 
   'snow-warning', 
   'honey-gather', 
   'frisk', 
   'reckless', 
   'multitype', 
   'flower-gift', 
   'bad-dreams', 
   'pickpocket', 
   'sheer-force', 
   'contrary', 
   'unnerve', 
   'defiant', 
   'defeatist', 
   'cursed-body', 
   'healer', 
   'friend-guard', 
   'weak-armor', 
   'heavy-metal', 
   'light-metal', 
   'multiscale', 
   'toxic-boost', 
   'flare-boost', 
   'harvest', 
   'telepathy', 
   'moody', 
   'overcoat', 
   'poison-touch', 
   'regenerator', 
   'big-pecks', 
   'sand-rush', 
   'wonder-skin', 
   'analytic', 
   'illusion', 
   'imposter', 
   'infiltrator', 
   'mummy', 
   'moxie', 
   'justified', 
   'rattled', 
   'magic-bounce', 
   'sap-sipper', 
   'prankster', 
   'sand-force', 
   'iron-barbs', 
   'zen-mode', 
   'victory-star', 
   'turboblaze', 
   'teravolt', 
   'aroma-veil', 
   'flower-veil', 
   'cheek-pouch', 
   'protean', 
   'fur-coat', 
   'magician', 
   'bulletproof', 
   'competitive', 
   'strong-jaw', 
   'refrigerate', 
   'sweet-veil', 
   'stance-change', 
   'gale-wings', 
   'mega-launcher', 
   'grass-pelt', 
   'symbiosis', 
   'tough-claws', 
   'pixilate', 
   'gooey', 
   'aerilate', 
   'parental-bond', 
   'dark-aura', 
   'fairy-aura', 
   'aura-break', 
   'primordial-sea', 
   'desolate-land', 
   'delta-stream', 
   'stamina', 
   'wimp-out', 
   'emergency-exit', 
   'water-compaction', 
   'merciless', 
   'shields-down', 
   'stakeout', 
   'water-bubble', 
   'steelworker', 
   'berserk', 
   'slush-rush', 
   'long-reach', 
   'liquid-voice', 
   'triage', 
   'galvanize', 
   'surge-surfer', 
   'schooling', 
   'disguise', 
   'battle-bond', 
   'power-construct', 
   'corrosion', 
   'comatose', 
   'queenly-majesty', 
   'innards-out', 
   'dancer', 
   'battery', 
   'fluffy', 
   'dazzling', 
   'soul-heart', 
   'tangling-hair', 
   'receiver', 
   'power-of-alchemy', 
   'beast-boost', 
   'rks-system', 
   'electric-surge', 
   'psychic-surge', 
   'misty-surge', 
   'grassy-surge', 
   'full-metal-body', 
   'shadow-shield', 
   'prism-armor', 
   'neuroforce', 
   'intrepid-sword', 
   'dauntless-shield', 
   'libero', 
   'ball-fetch', 
   'cotton-down', 
   'propeller-tail', 
   'mirror-armor', 
   'gulp-missile', 
   'stalwart', 
   'steam-engine', 
   'punk-rock', 
   'sand-spit', 
   'ice-scales', 
   'ripen', 
   'ice-face', 
   'power-spot', 
   'mimicry', 
   'screen-cleaner', 
   'steely-spirit', 
   'perish-body', 
   'wandering-spirit', 
   'gorilla-tactics', 
   'neutralizing-gas', 
   'pastel-veil', 
   'hunger-switch', 
   'quick-draw', 
   'unseen-fist', 
   'curious-medicine', 
   'transistor', 
   'dragons-maw', 
   'chilling-neigh', 
   'grim-neigh', 
   'as-one-glastrier', 
   'as-one-spectrier', 
   'lingering-aroma', 
   'seed-sower', 
   'thermal-exchange', 
   'anger-shell', 
   'purifying-salt', 
   'well-baked-body', 
   'wind-rider', 
   'guard-dog', 
   'rocky-payload', 
   'wind-power', 
   'zero-to-hero', 
   'commander', 
   'electromorphosis', 
   'protosynthesis', 
   'quark-drive', 
   'good-as-gold', 
   'vessel-of-ruin', 
   'sword-of-ruin', 
   'tablets-of-ruin', 
   'beads-of-ruin', 
   'orichalcum-pulse', 
   'hadron-engine', 
   'opportunist', 
   'cud-chew', 
   'sharpness', 
   'supreme-overlord', 
   'costar', 
   'toxic-debris', 
   'armor-tail', 
   'earth-eater', 
   'mycelium-might'];