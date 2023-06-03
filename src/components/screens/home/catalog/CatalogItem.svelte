<script lang='ts'>
	import { link } from 'svelte-spa-router';
	import TiStarFullOutline from 'svelte-icons/ti/TiStarFullOutline.svelte';
	import IoMdWallet from 'svelte-icons/io/IoMdWallet.svelte';
	import GoPrimitiveDot from 'svelte-icons/go/GoPrimitiveDot.svelte';
	import type { IRestaurant } from '@/components/screens/home/catalog/restaurant.interface';

	export let restaurant: IRestaurant;
	const { slug, name, img: src, kitchens, destination, priceRating, rating } = restaurant;
</script>

<div class='restaurant'>
	<a use:link={`/restaurant/${slug}`} href='/'>
		<img {src} alt={name} title={name}>
	</a>

	<div class='info'>
		<div class='top'>
			<div class='heading'>
				{name}
			</div>
			<div class='price'>
				<div class='icon'>
					<IoMdWallet />
				</div>
				<span>Average price {priceRating}</span>
			</div>

			<div class='kitchens'>
				{#each kitchens as kitchen, index (kitchen)}
					<div>
						{kitchen}
					</div>
					{#if index !== kitchens.length - 1}
						<div style='width: 5px;'>
							<GoPrimitiveDot />
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div>
			<div class='rating'>
				<div class='star'>
					<TiStarFullOutline />
				</div>
				<span>{rating}</span>
			</div>
			<div class='destination'>{destination} km</div>
		</div>

	</div>
</div>


<style lang='scss'>
  .restaurant {
    @apply mb-12 bg-white shadow rounded-3xl relative;

    > a > img {
      @apply rounded-3xl;
    }

    .info {
      @apply flex justify-between text-[#111] p-4;
      .top {
        .heading {
          @apply font-semibold text-2xl mb-2;
        }

        .price {
          @apply flex items-center;

          .icon {
            @apply w-5 mr-1.5;
          }
        }

        .kitchens {
          @apply opacity-20 flex items-center mt-2 text-sm;

          > div {
            @apply mr-2;
          }
        }
      }

      .rating {
        @apply flex items-center;
        .star {
          @apply w-5 text-yellow-400;
        }

        > span {
          @apply inline-block ml-1;
        }
      }

      .destination {
        @apply mt-3 bg-green-500 p-1 px-2 text-white text-sm rounded-lg;
      }
    }

    &:before, &:after {
      @apply absolute rounded-3xl left-2;
      content: '';
      width: 90%;
      height: 94%;
    }

    &:before {
      @apply top-2;
      background-color: #C4EAD8;
      transform: rotate(-10deg);
      z-index: -1;
    }

    &:after {
      @apply top-2;
      background-color: #DFF2E8;
      transform: rotate(-13deg);
      z-index: -2;
    }
  }
</style>