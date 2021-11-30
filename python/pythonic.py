def hbd_median_price(self):
        """ Obtain the hbd price as derived from the median over all
            witness feeds. Return value will be HBD
        """
        return (Amount(self.hived.get_feed_history()['current_median_history']
                       ['base']).amount / Amount(self.hived.get_feed_history(
        )['current_median_history']['quote']).amount)