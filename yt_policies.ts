/**
 * @fileoverview A description of this module.  What would someone
 * new to your team want to know about the code in this file?
 * (DO NOT SUBMIT as is; replace this comment.)
 */


export function listMyPolicies(onBehalfOfContentOwner) {
  let l = YoutubePartner.Policies?.list(
      {onBehalfOfContentOwner, sort: 'TIME_UPDATED_DESC'});
  Logger.log(l);
}
