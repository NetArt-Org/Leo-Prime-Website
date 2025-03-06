import { UserRoundX } from 'lucide-react';
import Link from 'next/link';

const UserProfile = () => {
  return (
    <div className="register">
      <div className="block md:hidden">
        <button className="avatar">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden md:flex flex">
      <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-border Button2__roottype_border__t2Tq1SPhhO __wab_instance Homepage__button2__cqMfX" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text___43BsT">Sign in </div></span></div></div></button>
      <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-banner-button  Button2__roottype_gradientBannerBtn__t2Tq1Lm9L3 __wab_instance Homepage__button2___2ETMv" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt Button2__slotTargetChildrentype_gradientBannerBtn__kqVktLm9L3"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text__dtbLn">Register</div></span></div></div></button>
         </div>
    </div>
  );
};

export default UserProfile;
