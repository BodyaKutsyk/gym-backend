import { sequelize } from './utils/db.js';

import './models/additionalService.model.js';
import './models/coach.model.js';
import './models/discount.model.js';
import './models/subscription.model.js';

import './models/client.model.js';

sequelize.sync({ force: true });
