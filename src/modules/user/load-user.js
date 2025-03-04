import { loadProfile } from "./load-profile"
import { loadHistoryList } from "./load-history"
import { loadLoyaltyCard } from "./load-loyalt-card"
import { loadProgressBar } from "./load-progress"

export function loadUser(user) {
    loadProfile(user);
    loadHistoryList(user)
    loadLoyaltyCard(user)
    loadProgressBar(user.loyaltyCard)
}