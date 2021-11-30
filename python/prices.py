from hive import Hive
from hive.converter import Converter
h = Hive()

ac_info = h.get_account("cryptosharon")

def vests2hp(vests_count):
  vests_count = float(vests_count.replace(' VESTS', ''))
  converter = Converter(hived_instance = h)
  hp_count = vests_count / 1e6 * converter.hive_per_mvests()
  return ('{:.3f}'.format(hp_count))

# This will return you the amount of SP/HP that your are holding
print(vests2hp(ac_info['vesting_shares']))